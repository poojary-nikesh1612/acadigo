import mongoose from "mongoose";

export async function GET(req, { params }) {
  const { stream } = await params;
  

  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Access the collection dynamically
    const streamCollection = mongoose.connection.db.collection("streams");

    // Retrieve all documents from the collection
    const Stream = await streamCollection.findOne({ name: stream });

    if (!Stream) {
      return new Response(
        JSON.stringify({ success: false, message: "Stream not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({ success: true, subjects: Stream.subjects }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch subjects" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
