import Subcategory from '../models/Subcategory.js';

// Creating a new subcategory
export const createSubcategory = async (req, res) => {
    try {
        const { name, category } = req.body;

        // Checking if the subcategory already exists
        const existingSubcategory = await Subcategory.findOne({ name });
        if (existingSubcategory) {
            return res.status(400).json({ message: 'Subcategory already exists' });
        }

        // Creating a new subcategory
        const subcategory = await Subcategory.create({ name, category });
        res.status(201).json({ message: 'Subcategory created successfully', subcategory });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Getting all subcategories
export const getSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.find();
        res.status(200).json(subcategories);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Deleting a subcategory
export const deleteSubcategory = async (req, res) => {
    try {
        const { id } = req.params;

        const subcategory = await Subcategory.findByIdAndDelete(id);
        if (!subcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }

        res.status(200).json({ message: 'Subcategory deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
