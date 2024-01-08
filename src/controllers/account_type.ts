import { type Request, type Response } from 'express'
import AccountType from '../models/AccountType'

export const getAccountTypes = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const results = await AccountType.findAll()
    const json = results.map(result => result.toJSON())

    res.send(json)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getAccountType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await AccountType.findByPk(id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createAccountType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, bussinessKey } = req.body
    const result = await AccountType.create({ name, bussinessKey })
    res.status(201).send(result.toJSON())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const editAccountType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const { name, bussinessKey } = req.body
    const result = await AccountType.update(
      { name, bussinessKey },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteAccountType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await AccountType.update(
      { active: false },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
