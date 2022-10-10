const bttn1 = document.getElementById('bttn1');

const bttn2 = document.getElementById('bttn2');
const h1=document.getElementById('head1');
const h2=document.getElementById('head2');


bttn1.addEventListener('click', function handleClick() {
  h1.textContent = 'Button 1';
  h2.textContent='was clicked'
});

bttn2.addEventListener('click', function handleClick() {
    h1.textContent = 'Button 2';
    h2.textContent='was clicked'
  });
