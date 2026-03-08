import connectDB from "@/lib/db";
import COMMENT from "@/lib/models/commentSchema";

export async function POST(req) {
  try {
    await connectDB();
    const { page_id, username, comment } = await req.json();

    const newComment = { username, comment };

    let Page = await COMMENT.findOne({ page_id });

    if (!Page) Page = new COMMENT({ page_id });

    Page.comments.push(newComment);
    await Page.save();

    return Response.json(
      { success: true, message: "Comment posted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to post comment.Try again!" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page_id = searchParams.get("page_id");

    const Page = await COMMENT.aggregate([
      { $match: { page_id } },
      { $unwind: "$comments" },
      { $sort: { "comments.createdAt": -1 } },
      {
        $group: {
          _id: "$_id",
          comments: { $push: "$comments" },
        },
      },
    ]);

    if (!Page.length) {
      return Response.json(
        { success: false, message: "Comments not found" },
        { status: 404 },
      );
    }
    return Response.json(
      { success: true, comments: Page[0].comments },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "Failed to fetch comments" },
      { status: 500 },
    );
  }
}
