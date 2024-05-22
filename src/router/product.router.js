const express = require('express')
const Products = require('../model/produt.model');
const Product = require('../model/produt.model');
const router = express.Router();

router.get('/products', async (req, res) => {
    const products = await Products.findAll();
    res.status(200).json({
        ok: true,
        status: 200,
        body: products
    })
})

router.get('/products/:product_id', async (req, res) => {
    const {product_id} = req.params
    const product = await Products.findOne({
        where: {
            product_id: product_id
        }
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: product
    })
})

router.post('/products',async (req, res) => {
    try{
        await Products.sync();
        console.log(req.body)
        const { product_name, price, color } = req.body;
        const createProduct = await Products.create({
            product_name,
            price,
            color
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Created Product',
            body: {
                product_name,
                price,
                color
            }
        });
    }catch(error){
        console.error('Error creating product:', error);
        res.status(500).send('Error creating product');
    }
})

router.put('/products/:product_id', async (req, res) => {
    const {product_id} = req.params;
    const { product_name, price, color } = req.body;
    const updateProduct = await Products.update({
        product_name,
        price,
        color
    }, {where: {
        product_id: product_id
    }})
    res.json({
        ok: true,
        status: 200,
        body: updateProduct
    })
})

router.delete('/products/:product_id', async (req, res) => {
    const {product_id} = req.params;
    const deleteProduct = await Product.destroy(
        {where: {
            product_id: product_id
        } }
    )
    res.status(204).json({
        ok: true,
        status: 204,
        body: deleteProduct
    });
})
module.exports = router;