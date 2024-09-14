import { Request, Response } from 'express';
import Item from '../../models/itemModel';


const getItems = async (req: Request, res: Response) => {
    try {
        const items = await Item.find();
        const noOfItems = await Item.countDocuments();
        res.status(200).json({noOfItems, items});
    } catch (error) {
        res.status(500).json(error);
    }
}   

export default getItems;
