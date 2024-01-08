import { type Request, type Response } from 'express'
import TransactionType from '../models/TransactionType'

export const getTransactionTypes = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const results = await TransactionType.findAll()
    const json = results.map(result => result.toJSON())

    res.send(json)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getTransactionType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await TransactionType.findByPk(id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createTransactionType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, bussinessKey } = req.body
    const result = await TransactionType.create({ name, bussinessKey })
    res.status(201).send(result.toJSON())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const editTransactionType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const { name, bussinessKey } = req.body
    const result = await TransactionType.update(
      { name, bussinessKey },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteTransactionType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await TransactionType.update(
      { active: false },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
