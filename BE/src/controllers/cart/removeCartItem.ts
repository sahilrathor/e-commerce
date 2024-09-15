import { Request, Response } from "express";
import Cart from "../../models/cartModel";

const removeCartItem = async (req: Request, res: Response) => {
    const { userId, itemId }: { userId: string, itemId: string } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        
        if(!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        const itemIndex = cart.items.findIndex(item => item.itemId === itemId);
        if(itemIndex === -1) {
            return res.status(404).json({ error: "Item not found in cart" });
        }

        cart.items.splice(itemIndex, 1);
        await cart.save();

        res.status(200).json({ message: "Item removed from cart successfully"});
    } catch (error) {
        res.status(500).json({ error: "Failed to remove item from cart" });
    }
}

export default removeCartItem;
