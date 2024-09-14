import { Request, Response } from 'express';
import Item from '../../models/itemModel';
const deleteItem = async (req: Request, res: Response) => {
    const {id} = req.params;
    
    try {
        const item = await Item.findById(id);

        if(!item) {
            return res.status(404).json({error: "Item not found"});
        }

        await item.deleteOne({_id: id});

        res.status(200).json({message: "Item deleted successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
}

export default deleteItem;