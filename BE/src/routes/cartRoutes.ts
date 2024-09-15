import express from 'express';
import addCartItem from '../controllers/cart/addCartItem';
import getCart from '../controllers/cart/getCart';
import removeCartItem from '../controllers/cart/removeCartItem';
import updateCartItem from '../controllers/cart/updateCartItem';

const router = express.Router();

router.post('/', addCartItem);
router.get('/:userId', getCart);
router.delete('/', removeCartItem);
router.patch('/', updateCartItem);

export default router;