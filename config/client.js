import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
export default async function client() {
  try {
    const client = new MongoClient(process.env.DB_URL, {});

    await client.connect();

    return client;
  } catch (err) {}
}
