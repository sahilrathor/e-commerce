import { Request, Response } from 'express';
import Item from '../../models/itemModel';

const updateItem = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name, description, price, stock, image, category} = req.body;

    try {
        const item = await Item.findById(id);

        if(!item) {
            return res.status(404).json({error: "Item not found"});
        }

        item.name = name;
        item.description = description;
        item.price = price;
        item.stock = stock;
        item.image = image;
        item.category = category;

        await item.save();

        res.status(200).json({message: "Item updated successfully", updatedItem: item});
    } catch (error) {
        res.status(500).json(error);
    }   
}

export default updateItem;  