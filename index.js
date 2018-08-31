var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random() * 100) + 1);
 var newItem = {itemName: item, itemPrice: price};
 cart.push(newItem); 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var message = "";
  var lastItem;
  if (cart.length > 0){
    for(let i = 0; i < cart.length; i++){
      message = message + cart[i].itemName + " at $" + cart[i].itemPrice;
      lastItem = cart[i];
      
      if (cart.length-1 === lastItem){
        message = message + ".";
      } else if (message.slice(-5) === ", and") {
        message = message.slice(0, -5);
      } else {
        message = message + ", and ";
        console.log("Just added comma and to message.")
      }
    }
    
    return `In your cart, you have ${message}`;
  } else {
    return `Your shopping cart is empty.`;
  }
}

function total() {
  // write your code here
  var value = 0;
  
  for (let i = 0; i < cart.length; i++){
    value += cart[i].itemPrice;
  }
  
  return `The current total value of your cart is $${value}.`;
}

function removeFromCart(item) {
  // write your code here
  var index;
  
  if (cart.length > 0){
    if (cart.includes(item) === true){
      for(let i = 0; i < cart.length; i++){
        
        if(cart[i]["itemName"] === item){
          index = i;
        }
      }
      
      cart.splice(index, 1);
      return cart;
    } else {
      return `That item is not in your cart.`;
    }
  } else {
    return `The cart is empty.`;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber > 0){
    var totalValue = total();
    totalValue = parseInt(totalValue.slice(-4, -1));
    cart.splice(0, cart.length);
    
    return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`;
    
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
