import { type Request, type Response } from 'express'
import Category from '../models/Category'

export const getCategorys = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const results = await Category.findAll()
    const json = results.map(result => result.toJSON())

    res.send(json)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Category.findByPk(id)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, type } = req.body
    const result = await Category.create({ name, type })
    res.status(201).send(result.toJSON())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const editCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, type } = req.body
    const { id } = req.params
    const result = await Category.update(
      { name, type },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const result = await Category.update(
      { active: false },
      { where: { id } }
    )
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
