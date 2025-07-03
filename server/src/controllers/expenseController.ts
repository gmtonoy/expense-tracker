import { Request, Response } from "express";
import { prisma } from "../prisma";

export const getExpenses = async (_req: Request, res: Response) => {
  const expenses = await prisma.expense.findMany({ orderBy: { date: "desc" } });
  res.json(expenses);
};

export const createExpense = async (req: Request, res: Response) => {
  const { description, amount, date } = req.body;
  const expense = await prisma.expense.create({
    data: { description, amount: parseFloat(amount), date: new Date(date) }
  });
  res.status(201).json(expense);
};

export const getExpense = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const expense = await prisma.expense.findUnique({ where: { id } });
  if (!expense) return res.status(404).json({ message: "Not found" });
  res.json(expense);
};

export const updateExpense = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { description, amount, date } = req.body;
  const expense = await prisma.expense.update({
    where: { id },
    data: { description, amount: parseFloat(amount), date: new Date(date) }
  });
  res.json(expense);
};

export const deleteExpense = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.expense.delete({ where: { id } });
  res.status(204).send();
};
