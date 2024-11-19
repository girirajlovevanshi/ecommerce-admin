import mongoose from 'mongoose';

const SubcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Subcategories must be unique
    },
    category: {
        type: String,
        required: true, // Associate each subcategory with a category
    },
}, { timestamps: true });

export default mongoose.model('Subcategory', SubcategorySchema);
