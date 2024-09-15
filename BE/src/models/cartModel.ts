import mongoose, { Schema, Document } from 'mongoose';
import { Cart } from '../interfaces/cartInterface';

const cartSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        required: true 
    },
    items: [{
        itemId: { 
            type: String, 
            required: true 
        },
        quantity: { 
            type: Number, 
            required: true 
        }
    }],
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
}, {
    timestamps: true
});

const CartModel = mongoose.model<Cart>('Cart', cartSchema);

export default CartModel;