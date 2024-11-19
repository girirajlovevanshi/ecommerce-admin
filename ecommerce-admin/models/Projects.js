import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String, 
        required: false, 
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
