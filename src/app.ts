import express, { Express } from "express";
import "dotenv/config";
import "./dbs/init.mongodb";

const app: Express = express();

export { app };
