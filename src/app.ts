import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleweres/globalErrorHandler";
import notFound from "./app/middleweres/notFound";
const app: Application = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
