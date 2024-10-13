import express from 'express'
import getItems from '../controllers/item/getItems'
import getItemInfo from '../controllers/item/getItemInfo'
import addItem from '../controllers/item/addItem'
import deleteItem from '../controllers/item/deleteItem'
import updateItem from '../controllers/item/updateItem'

const router = express.Router()

router.get('/', getItems);
router.get('/:id', getItemInfo);
router.post('/', addItem);
router.delete('/:id', deleteItem);
router.patch('/:id', updateItem);

export default router;