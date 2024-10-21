import { Request, Response } from 'express';
import Item from '../../models/itemModel';

const getItemInfo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if(!item) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json(error);
    }
}   

export default getItemInfo;