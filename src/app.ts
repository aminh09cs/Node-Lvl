import express, { Express } from "express";
import router from "./routes";
import "dotenv/config";
import "./dbs/init.mongodb";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init routes
app.use("/", router);

export default app;
