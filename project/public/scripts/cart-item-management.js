const cartItemUpdateFormElements=document.querySelectorAll('.cart-item-management');
const cartTotalPriceElement=document.getElementById('cart-total-price');
const cartBadge=document.querySelector('.nav-items .badge');

 async function updateCartItem(event){
    event.preventDefault();
    const form=event.target;

    const productId=form.dataset.productid;
    const quantity=form.firstElementChild.value;//input of form
    let response;
  try{
    response= await fetch('/cart/items',{
        method:'PATCH', //PATCH IS MOSTLY USED TO UPDATE CONTENTS
        body:JSON.stringify({
            productId:productId,
            quantity:quantity     //keys should match with cart controller
        }),
        headers:{                 //headers so on our server-side contents can parsed correctly.
          'Content-Type':'application/json'
        }
    });   //fetch sends request
  } catch(error){
    alert('something went wrong');
    return;
  }
  if(!response.ok){
    alert('something went wrong');
    return;
  }
  const responseData = await response.json();

  if (responseData.updatedCartData.updatedItemPrice === 0) {
    form.parentElement.parentElement.remove();
  } else {
    const cartItemTotalPriceElement =
      form.parentElement.querySelector('.cart-item-price');
    cartItemTotalPriceElement.textContent =
      responseData.updatedCartData.updatedItemPrice.toFixed(2);
  }

  cartTotalPriceElement.textContent =
    responseData.updatedCartData.newTotalPrice.toFixed(2);

  cartBadge.textContent = responseData.updatedCartData.newTotalQuantity;
}

for(const formElement of cartItemUpdateFormElements){
    formElement.addEventListener('submit',updateCartItem)
}