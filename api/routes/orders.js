const express = require('express');

const router = express.Router();

//get all orders
router.get('/',(req, res,next)=>{
    res.status(200).json({
        message: "orders were getched"
    })
})

//create orders
router.post('/', (req,res,next)=>{
    res.status(201).json({
        message: "order was created"
    })
})

//update order
router.patch('/:orderId', (req,res,next)=>{
    res.status(201).json({
        message:'updated order',
        orderId: req.params.orderId
    })
})
//delete order
router.delete('/:orderId', (req,res,next)=>{
    res.status(201).json({
        message:'deleted order',
        orderId: req.params.orderId
    })
})

module.exports = router;