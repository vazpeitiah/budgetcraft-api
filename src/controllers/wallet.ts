import { type Request, type Response } from 'express'
import Wallet from '../models/Wallet'

export async function getWallets (_req: Request, res: Response): Promise<void> {
  try {
    const wallets = await Wallet.findAll()
    const walletsJSON = wallets.map(wallet => wallet.toJSON())

    res.send(walletsJSON)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createWallet = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, balance } = req.body
    const wallet = await Wallet.create({ name, balance })
    res.status(201).send(wallet.toJSON())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
