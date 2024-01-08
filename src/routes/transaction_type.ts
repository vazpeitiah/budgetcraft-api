import express from 'express'
import {
  createTransactionType,
  getTransactionTypes,
  deleteTransactionType,
  editTransactionType,
  getTransactionType
} from '../controllers/transaction_type'

const router = express.Router()

router.get('/', getTransactionTypes)
router.get('/:id', getTransactionType)
router.post('/', createTransactionType)
router.put('/:id', editTransactionType)
router.delete('/:id', deleteTransactionType)

export default router
