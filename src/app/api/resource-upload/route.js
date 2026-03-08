import mongoose from "mongoose";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { PassThrough } from "stream";
import path from "path";
import connectDB from "@/lib/db";
import Resource from "@/lib/models/resourceSchema";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const drive = google.drive({ version: "v3", auth: oauth2Client });

export async function POST(req) {
  try {
    const formData = await req.formData();
    const ClassName = formData.get("ClassName");
    const subject = formData.get("subject");
    const uploader = formData.get("uploader");
    const files = formData.getAll("resource");

    if (files.length == 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No files selected. Please upload at least one file.",
        },
        { status: 400 },
      );
    }

    await connectDB();

    for (const file of files) {
      // Convert file to Buffer
      const buffer = Buffer.from(await file.arrayBuffer());

      const bufferStream = new PassThrough();
      bufferStream.end(buffer);

      // Upload to Google Drive
      const response = await drive.files.create({
        requestBody: {
          name: subject,
          mimeType: file.type,
          parents: [process.env.GOOGLE_DRIVE_FOLDER_ID.trim()],
        },
        media: {
          mimeType: file.type,
          body: bufferStream,
        },
        fields: " webViewLink",
      });

      const newResource = new Resource({
        ClassName,
        subject,
        resourceLink: response.data.webViewLink,
        uploader,
      });
      await newResource.save();
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your file has been submitted! We'll review it shortly, and once approved, it will be available on the site.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again or check the file format and size.",
      },
      { status: 500 },
    );
  }
}
