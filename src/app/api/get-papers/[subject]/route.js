import mongoose from "mongoose";

export async function GET(req, { params }) {
  const { subject } = await params;

  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Access the collection dynamically
    const subjectCollection = mongoose.connection.db.collection("subjects");

    // Retrieve all documents from the collection
    const Subject = await subjectCollection.findOne({ name: subject });

    if (!Subject) {
      return new Response(
        JSON.stringify({ success: false, message: "Subject not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({ success: true, papers: Subject.papers }),
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
