import express from 'express'
import { createWallet, getWallets } from '../controllers/wallet'

const router = express.Router()

router.get('/', getWallets)
router.post('/', createWallet)

export default router
