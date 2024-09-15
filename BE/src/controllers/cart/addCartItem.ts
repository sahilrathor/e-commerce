import { Request, Response } from 'express';
import Cart from '../../models/cartModel';

const addCartItem = async (req: Request, res: Response) => {
    const { userId, itemId, quantity }: { userId: string, itemId: string, quantity: number } = req.body;

    if(!userId || !itemId || !quantity) {
        return res.status(400).json({ error: "All fields are required" });
    }
    if(quantity <= 0 || quantity > 25) {
        return res.status(400).json({ error: "Quantity must be greater than 0 and less than 25" });
    }

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            // Create a new cart if it doesn't exist
            const newCart = new Cart({
                userId,
                items: [{ itemId, quantity }]
            });

            await newCart.save();
            res.status(200).json({ message: "Item added to cart successfully", cart: newCart });
        } else {
            // Add item to existing cart
            const existingItem = cart.items.find(item => item.itemId === itemId);

            if (existingItem) {
                if(Number(existingItem.quantity) + Number(quantity) > 25) {
                    return res.status(400).json({ error: "Total quantity must be less than 25" });
                }
                existingItem.quantity = Number(existingItem.quantity) + Number(quantity);
            } else {
                cart.items.push({ itemId, quantity });
            }

            await cart.save();
            res.status(200).json({ message: "Item added to cart successfully", cart });
        }


    } catch (error) {
        res.status(500).json({ error: "Failed to add item to cart" });
    }
}

export default addCartItem;