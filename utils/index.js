import client from "../config/client.js";

export const giveCollection = async (collectionName) => {
  try {
    const clientConnect = await client();

    const db = clientConnect.db("ajay-fm");
    console.log(db);
    const collection = db.collection(collectionName);
    return collection;
  } catch (err) {
    console.log(err.message);
  }
};

async function insertProgram(programData) {
  const programCollection = await giveCollection("program");

  try {
    const result = await programCollection.insertOne(programData);
    console.log("Program inserted successfully:", result.insertedId);
  } catch (err) {
    console.error("Error inserting program:", err);
  }
}

async function insertTracks(trackData) {
  const tracksCollection = await giveCollection("tracks");

  try {
    const result = await tracksCollection.insertMany(trackData);
    console.log("Tracks inserted successfully:", result.insertedCount);
  } catch (err) {
    console.error("Error inserting tracks:", err);
  }
}

const program = {
  name: "Emotional Resilience Program",
  description: "This program aims to help participants build emotional resilience through meditation, self-reflection, and cognitive strategies.",
  duration: "30 days",
  instructor: "Ajay Singh",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0ITRsBJqqOAbIeVHsmxEBwhCYmX96a7H0g&s"
};

const tracks = [
  {
    title: "Inner Peace Zen Meditation",
    duration: "3:59",
    programName: "Guided Sleep Meditation",
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/ecommerceapp-ce76a.appspot.com/o/bajan%2Fradiant-mindfulness-165866.mp3?alt=media&token=9ba8dc72-45d8-41a5-9523-db6be90a430f",
  },
  
];

// insertProgram(program);
// insertTracks(tracks);
