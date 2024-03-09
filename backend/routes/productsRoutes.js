const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Create a new product
router.post('/products', productController.createProduct);

// Get all products
router.get('/products', productController.getAllProducts);

// Get a single product by ID
router.get('/products/:id', productController.getProduct);

// Update a product
router.patch('/products/:id', productController.updateProduct);

// Delete a product
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
