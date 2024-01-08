import { type Request, type Response } from 'express'
import Account from '../models/Account'

export const getAccounts = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const results = await Account.findAll()
    const json = results.map(result => result.toJSON())

    res.send(json)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Account.findByPk(id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, type, includeInTotal } = req.body
    const result = await Account.create({ name, type, includeInTotal })
    res.status(201).send(result.toJSON())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const editAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, type, includeInTotal } = req.body
    const { id } = req.params
    const result = await Account.update(
      { name, type, includeInTotal },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteAccount = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Account.update(
      { active: false },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
