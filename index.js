var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 itemName = "";
 var newObj ={};
   newObj = {itemName: "itemPrice"};
    return itemName + " has been added to your cart.";
  }

function viewCart() {
  var i = 0
  if(i === 0) {
    return "Your shopping cart is empty."
  }
  console.log({})
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
