import express from 'express'
import {
  createIncome,
  getSingleIncome,
  deleteIncome,
  editIncome,
  getIncome
} from '../controllers/income'

const router = express.Router()

router.get('/', getIncome)
router.get('/:id', getSingleIncome)
router.post('/', createIncome)
router.put('/:id', editIncome)
router.delete('/:id', deleteIncome)

export default router
