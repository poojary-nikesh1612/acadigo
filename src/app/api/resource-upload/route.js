import mongoose from "mongoose";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { PassThrough } from "stream";
import path from "path";

const resourceSchema = new mongoose.Schema({
  ClassName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  resourceLink: {
    type: String,
    required: true,
  },
  uploader: {
    type: String,
    required: true,
  },
});

const Resource =
  mongoose.models.Resource || mongoose.model("Resource", resourceSchema);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(process.cwd(), "service-account.json"),
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

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
        { status: 400 }
      );
    }
    await mongoose.connect(process.env.MONGO_URI);

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
          parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
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

    mongoose.connection.close();

    return NextResponse.json(
      {
        success: true,
        message:
          "Your file has been submitted! We'll review it shortly, and once approved, it will be available on the site.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again or check the file format and size.",
      },
      { status: 500 }
    );
  }
}
