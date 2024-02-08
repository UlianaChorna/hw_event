document.addEventListener('itemAdded', (event) => {
  const cartItems = document.querySelector('ul');
  const newItem = document.createElement('li');
  newItem.textContent = `${event.detail.name} - ${event.detail.price}`

  cartItems.appendChild(newItem);
});

document.addEventListener('priceUpdated', (event)=> {
  document.querySelector('span').textContent = event.detail;
})

document.getElementById('addItemBtn').addEventListener('click', () => {

  const itemName = prompt('Enter item name:');
  const itemPrice = parseFloat(prompt('Enter item price:'));

  const itemAddedEvent = new CustomEvent('itemAdded', { detail: 
    { 
      name: itemName, 
      price: itemPrice 
    } 
  });
  document.dispatchEvent(itemAddedEvent);

  const totalPrice = parseFloat(document.getElementById('totalPrice').textContent);
  const updatedPrice = totalPrice + itemPrice;

  const priceUpdatedEvent = new CustomEvent('priceUpdated', { 
    detail: updatedPrice 
  });
  document.dispatchEvent(priceUpdatedEvent);
});