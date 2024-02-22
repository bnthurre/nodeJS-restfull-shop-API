const express = require('express');

const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: "handling get requests /products"
    })
})


router.post('/', (req,res,next)=>{
    const products = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: "handling post request /products",
        createdProduct: products
    })
})

router.get('/:productId', (req,res, next)=>{
    id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'you get an id',
            Id: id
        })
    }
    else{
        res.status(200).json({
            mesaage: "you dont passed id"
        })
    }

})

router.patch('/:productId', (req,res, next)=>{
        res.status(200).json({
            message: 'updated product',
        })
})
router.delete('/:productId', (req,res, next)=>{
    res.status(200).json({
        message: 'deleted product',
    })
})

module.exports =router;