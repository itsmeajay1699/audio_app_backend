import express from "express";

import { config } from "dotenv";

import cors from "cors";

import indexRouter from "./routes/index.js";
import "./utils/index.js";
config();

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", function (req, res) {
  return res.status(200).json({ message: "Welcome to the backend" });
});

app.use("/api/v1", indexRouter);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
