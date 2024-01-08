import express from 'express'
import {
  createExpense,
  getExpenses,
  deleteExpense,
  editExpense,
  getExpense
} from '../controllers/expense'

const router = express.Router()

router.get('/', getExpenses)
router.get('/:id', getExpense)
router.post('/', createExpense)
router.put('/:id', editExpense)
router.delete('/:id', deleteExpense)

export default router
