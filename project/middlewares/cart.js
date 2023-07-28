//check if cart is already present or not
const Cart=require('../models/cart.model');
function initializeCart(req,res,next){
    let cart;
    if(!req.session.cart){
        cart=new Cart(); //new cart array
    } else{
        const sessionCart=req.session.cart;
        cart=new Cart(sessionCart.items,
            sessionCart.totalQuantity,
            sessionCart.totalPrice)//old cart which we already have
    }
    res.locals.cart=cart;
    next();
}
module.exports=initializeCart;