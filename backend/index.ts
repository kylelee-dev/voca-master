import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes";
import dbConnect from "./src/db/db";
import { errorHandler, notFound } from "./src/middleware/errorHandler";
dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
const port: number = parseInt(process.env.PORT as string) || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Voca Master!");
});

app.use("/user", userRoutes);

const dbConnection = dbConnect();

app.use(notFound);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
