import { Request, Response } from 'express';
import Item from '../../models/itemModel';

const addItem = async (req: Request, res: Response) => {
    const {name, description, price, stock, image, category} = req.body;

    if(!name || !price || !stock || !image || !category) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const item = await Item.findOne({name, category});

    if(item) {
        return res.status(400).json({ error: "Item already exists" });
    }

    try {
        const newItem = await Item.create({name, description, price, stock, image, category});
        res.status(200).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error });
    }


}

export default addItem;  