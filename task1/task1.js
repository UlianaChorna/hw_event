const btn = document.querySelector('button');

btn.addEventListener('click',(event) => {
event.preventDefault();
alert('Some text');
} );

btn.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'lightblue';
});