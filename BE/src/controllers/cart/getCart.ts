import { Request, Response } from 'express';
import Cart from '../../models/cartModel';

const getCartItem = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });

        if(!cart) {
            return res.status(404).json({ error: "Cart not found for the given userId" });
        }

        res.status(200).json({ cart });
    } catch (error) {
        res.status(500).json({ error: "Failed to get item from cart" });
    }
}

export default getCartItem;