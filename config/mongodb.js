import { mongoose } from "mongoose";
import { DB_URI, NODE_ENV } from "./env.js";

if (!DB_URI) {
    throw new Error('Please define DB_URI variable inside .env.<development/production>.local file');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to database in mode', NODE_ENV);
    } catch (error) {
        console.error('Connection with database failed', error);
        process.exit(1);
    }
}

export default connectToDatabase;