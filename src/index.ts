import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Api version 1.0.0");
});

const port: number | any = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
