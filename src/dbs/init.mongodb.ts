import mongoose, { Mongoose } from "mongoose";
import database from "../configs/config.mongodb";

const { db } = database;
const connectString = `mongodb://${db.host}:${db.port}/${db.name}`;

class Database {
  private static instance: Database | null = null;

  private constructor() {
    this.connect();
  }

  connect(type: string = "mongodb"): void {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 100,
      })
      .then(() => console.log("Connect success", connectString))
      .catch((err) => console.error("Connect error:", err));
  }
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
