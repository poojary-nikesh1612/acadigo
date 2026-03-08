import connectDB from "@/lib/db";
import Feedback from "@/lib/models/feedbackSchema";

export async function POST(req) {
  try {
    await connectDB();

    const { message } = await req.json(); // Get message from request body

    const newFeedback = new Feedback({ message });
    await newFeedback.save();

    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Your feedback has been successfully submitted. Thank you for sharing your valuable thoughts with us!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error sending feedback", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send feedback. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
