import express from 'express';
import {
    createSubcategory,
    getSubcategories,
    deleteSubcategory,
} from '../controllers/subcategoryController.js';

const router = express.Router();

// Routes for subcategories
router.post('/', createSubcategory); // Create a subcategory
router.get('/', getSubcategories); // Get all subcategories
router.delete('/:id', deleteSubcategory); // Delete a subcategory by ID

export default router;
