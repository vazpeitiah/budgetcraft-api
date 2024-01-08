import express from 'express'
import {
  createAccountType,
  getAccountTypes,
  deleteAccountType,
  editAccountType,
  getAccountType
} from '../controllers/account_type'

const router = express.Router()

router.get('/', getAccountTypes)
router.get('/:id', getAccountType)
router.post('/', createAccountType)
router.put('/:id', editAccountType)
router.delete('/:id', deleteAccountType)

export default router
