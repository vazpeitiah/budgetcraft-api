import express from 'express'
import {
  createCategory,
  getCategorys,
  deleteCategory,
  editCategory,
  getCategory
} from '../controllers/category'

const router = express.Router()

router.get('/', getCategorys)
router.get('/:id', getCategory)
router.post('/', createCategory)
router.put('/:id', editCategory)
router.delete('/:id', deleteCategory)

export default router
