import express from 'express'
import {
  createTransfer,
  getTransfers,
  deleteTransfer,
  editTransfer,
  getTransfer
} from '../controllers/transfer'

const router = express.Router()

router.get('/', getTransfers)
router.get('/:id', getTransfer)
router.post('/', createTransfer)
router.put('/:id', editTransfer)
router.delete('/:id', deleteTransfer)

export default router
