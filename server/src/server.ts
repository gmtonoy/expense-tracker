import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { expenseRouter } from "./routes/expenseRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/expenses", expenseRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
