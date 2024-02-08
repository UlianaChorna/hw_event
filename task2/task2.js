const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
  console.log('Key Code:', event.keyCode);

  if (event.keyCode === 13) {
    event.preventDefault();
    alert('Input Value: ' + input.value);
  }
});

input.addEventListener('keyup', (event) => {
  console.log('Key Up - Key Code:', event.keyCode);
});

input.addEventListener('keypress',(event) => {
  console.log('Key Press - Key Code:', event.keyCode);
});