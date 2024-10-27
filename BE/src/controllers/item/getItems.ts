import { Request, Response } from 'express';
import Item from '../../models/itemModel';


const getItems = async (req: Request, res: Response) => {
    try {
        let items;

        if(req.query.category){
            const query = req.query.category as string;
            const categories = query.split(',');

            items = await Item.find({category: {$in: categories}});
        }else{
            items = await Item.find();
        }
        
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(error);
    }
}   

export default getItems;
