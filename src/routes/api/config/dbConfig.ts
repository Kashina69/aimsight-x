import mongoose from "mongoose";
import { resolve } from "node:path";
import { config as loadEnv } from "dotenv";

loadEnv({ path: resolve(process.cwd(), ".env") });

let connectPromise: Promise<typeof mongoose> | null = null;
let hasLoggedReady = false;

export async function connectDB(): Promise<void> {
    const dbUri = process.env.DB_URI?.trim();
    if (!dbUri) {
        throw new Error("DB_URI is not set");
    }

    if (mongoose.connection.readyState === 1) {
        return;
    }

    if (!connectPromise) {
        connectPromise = mongoose.connect(dbUri);
        connectPromise
            .then(() => {
                if (!hasLoggedReady) {
                    console.log("MongoDB connected");
                    hasLoggedReady = true;
                }
            })
            .catch((error) => {
                console.error("MongoDB connection error:", error);
                connectPromise = null;
            });
    }

    await connectPromise;
}
