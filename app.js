require("dotenv").config();
import express from "express";
import { botRoutes } from "./routes/bot";
import { userRoutes } from "./routes/user";
const app = express();
app.use(express.json());
app.use("/bot", botRoutes);
app.use("/user", userRoutes);
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
