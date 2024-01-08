import { type Request, type Response } from 'express'
import Transfer from '../models/Transfer'

export const getTransfer = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const results = await Transfer.findAll()
    const json = results.map(result => result.toJSON())

    res.send(json)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getTransfers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Transfer.findByPk(id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createTransfer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      date,
      outputAccount,
      inputAccount,
      amount,
      description
    } = req.body
    const result = await Transfer.create({
      date,
      outputAccount,
      inputAccount,
      amount,
      description
    })
    res.status(201).send(result.toJSON())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const editTransfer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      date,
      outputAccount,
      inputAccount,
      amount,
      description
    } = req.body
    const { id } = req.params
    const result = await Transfer.update(
      {
        date,
        outputAccount,
        inputAccount,
        amount,
        description
      },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteTransfer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Transfer.update(
      { active: false },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
