const Product = require('../models/productModels')

// @desc Gets All Products @route GET /api/products
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error)
    }
}

// @desc Gets Single Products @route GET /api/product/id
const getProduct = async (req, res, id) => {
    try {
        const product = await Product.findAllById(id);

        if(!product) {

        } else {
            
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(product));
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getProducts, getProduct }