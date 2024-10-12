import { fetchAllProgram, fetchAllTracks } from "../services/programService.js";

export const getAllProgram = async (req, res) => {
  try {
    const songs = await fetchAllProgram();
    return res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllTracksByName = async (req, res) => {
  try {
    const { name } = req.params;
    const allTracks = await fetchAllTracks(name);
    return res.status(200).json(allTracks);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
