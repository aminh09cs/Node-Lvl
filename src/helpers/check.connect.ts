import mongoose from "mongoose";
import os from "os";
import process from "process";

const _SECONDS = 10000;

const countConnect = (): void => {
  const numConnection = mongoose.connections.length;
  console.log(`Connected to ${numConnection} database(s)`);
};

const checkOverload = (): void => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);

    if (numConnection > maxConnections) {
      console.log("Connection overload detected -> server");
    }
  }, _SECONDS);
};

export { countConnect, checkOverload };
