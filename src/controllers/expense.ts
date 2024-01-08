import { type Request, type Response } from 'express'
import Expense from '../models/Expense'

export const getExpenses = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const results = await Expense.findAll()
    const json = results.map(result => result.toJSON())

    res.send(json)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Expense.findByPk(id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, account, category, amount, description } = req.body
    const result = await Expense.create({
      date,
      account,
      category,
      amount,
      description
    })
    res.status(201).send(result.toJSON())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const editExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, account, category, amount, description } = req.body
    const { id } = req.params
    const result = await Expense.update(
      { date, account, category, amount, description },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Expense.update(
      { active: false },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
