// import mongoose from "mongoose";
// import { resolve } from "node:path";
// import { config as loadEnv } from "dotenv";

// loadEnv({ path: resolve(process.cwd(), ".env") });

// let connectPromise: Promise<typeof mongoose> | null = null;
// let hasLoggedReady = false;

// export async function connectDB(): Promise<void> {
//     const dbUri = process.env.DB_URI?.trim();
//     if (!dbUri) {
//         throw new Error("DB_URI is not set");
//     }

//     if (mongoose.connection.readyState === 1) {
//         return;
//     }

//     if (!connectPromise) {
//         connectPromise = mongoose.connect(dbUri);
//         connectPromise
//             .then(() => {
//                 if (!hasLoggedReady) {
//                     console.log("MongoDB connected");
//                     hasLoggedReady = true;
//                 }
//             })
//             .catch((error) => {
//                 console.error("MongoDB connection error:", error);
//                 connectPromise = null;
//             });
//     }

//     await connectPromise;
// }


import { MongoClient, Db } from "mongodb";
import { UserDocument } from "~/types/auth";

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = process.env.MONGODB_DB_NAME ?? "app";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// In development, reuse the connection across HMR reloads.
// In production, a new module instance is created once and cached in module scope.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

export async function getUsersCollection() {
  const db = await getDb();
  return db.collection<UserDocument>("users");
}

// Call once at app startup (e.g. in instrumentation.ts) to create indexes
export async function ensureIndexes() {
  const users = await getUsersCollection();
  await users.createIndex({ email: 1 }, { unique: true });
}