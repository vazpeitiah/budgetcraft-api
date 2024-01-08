import express from 'express'
import {
  createAccount,
  getAccounts,
  deleteAccount,
  editAccount,
  getAccount
} from '../controllers/account'

const router = express.Router()

router.get('/', getAccounts)
router.get('/:id', getAccount)
router.post('/', createAccount)
router.put('/:id', editAccount)
router.delete('/:id', deleteAccount)

export default router
