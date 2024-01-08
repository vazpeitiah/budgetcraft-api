import { type Request, type Response } from 'express'
import Income from '../models/Income'

export const getIncome = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const results = await Income.findAll()
    const json = results.map(result => result.toJSON())

    res.send(json)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getSingleIncome = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Income.findByPk(id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createIncome = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, account, category, amount, description } = req.body
    const result = await Income.create({
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

export const editIncome = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, account, category, amount, description } = req.body
    const { id } = req.params
    const result = await Income.update(
      { date, account, category, amount, description },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteIncome = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Income.update(
      { active: false },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
