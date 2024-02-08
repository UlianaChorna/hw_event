const list = document.querySelector('ul');

const listItems =  ['item 1', 'item 2', 'item 3']

listItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
});

list.addEventListener('click', (event) => {
  console.log('Clicked:', event.target.textContent);
});


  

