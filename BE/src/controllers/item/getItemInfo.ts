import { Request, Response } from 'express';
import Item from '../../models/itemModel';

const getItemInfo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if(!item) {
            return res.status(404).json({ error: "Item not found" });
        }

        // Get the category of the current item
        const itemCategory = item.category;
        
        // Find items with categories that match any category in the current item's category array
        // $in operator is used to match any of the values in the itemCategory array
        const similarItems = await Item.find({ category: { $in: itemCategory } });

        res.status(200).json({ item, similarItems });
    } catch (error) {
        res.status(500).json(error);
    }
}   

export default getItemInfo;