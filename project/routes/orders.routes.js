const express = require('express');

const ordersController = require('../controllers/orders.controllers');



const router=express.Router();
router.post('/',ordersController.addOrder)//orders
router.get('/',ordersController.getOrders); // /orders
module.exports = router;