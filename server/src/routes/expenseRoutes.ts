import { Router } from "express";
import {
  getExpenses,
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense
} from "../controllers/expenseController";

export const expenseRouter = Router();

expenseRouter.get("/", getExpenses);
expenseRouter.post("/", createExpense);
expenseRouter.get("/:id", getExpense);
expenseRouter.put("/:id", updateExpense);
expenseRouter.delete("/:id", deleteExpense);
