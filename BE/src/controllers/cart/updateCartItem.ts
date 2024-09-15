import { Request, Response } from "express";
import Cart from "../../models/cartModel";

const updateCartItem = async (req: Request, res: Response) => {
    const { userId, itemId, quantity }: { userId: string, itemId: string, quantity: number } = req.body;
    
    try {
        const cart = await Cart.findOne({ userId });

        if(!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        const itemIndex = cart.items.findIndex(item => item.itemId === itemId);
        if(itemIndex === -1) {
            return res.status(404).json({ error: "Item not found in cart" });
        }

        if(quantity <= 0 || quantity > 25) {
            return res.status(400).json({ error: "Quantity must be greater than 0 and less than 25" });
        } 

        cart.items[itemIndex].quantity = quantity;
        await cart.save();

        res.status(200).json({ message: "Item updated successfully", cart });
    } catch (error) {
        res.status(500).json({ error: "Failed to update item in cart" });
    } 
}

export default updateCartItem;  