import { giveCollection } from "../utils/index.js";

export const fetchAllProgram = async () => {
  try {
    const collection = await giveCollection("program");
    const songs = await collection.find({}).toArray();
    return songs;
  } catch (error) {
    console.error("Error fetching songs from database:", error);
    throw new Error("Database query failed");
  }
};

export const fetchAllTracks = async (trackName) => {
  try {
    const collection = await giveCollection("tracks");
    const query = trackName ? { programName: trackName } : {};
    const tracks = await collection.find(query).toArray();
    return tracks;
  } catch (err) {
    throw new Error("Database query failed");
  }
};
