const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const link = document.getElementById('link');
const block = document.getElementById('dv');

button1.addEventListener('click', function() {
  block.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
  block.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
  block.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function() {
  block.style.backgroundColor = 'white';
});

link.addEventListener('mouseover', function() {
  block.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseout', function() {
  block.style.backgroundColor = 'white';
});
