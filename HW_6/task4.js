const submitBtn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  const fio = document.querySelector('[name="fio"]').value;
  const phone = document.querySelector('[name="phone"]').value;
  const birthday = document.querySelector('[name="birthday"]').value;
  const email = document.querySelector('[name="email"]').value;
 
  const dataString = "ПІБ: " + fio + `\n` +
                   "Номер телефону: " + phone + "\n" +
                   "Дата народження: " + birthday + "\n" +
                   "Електронна пошта: " + email;
  
  const preElement = document.createElement('pre');
  preElement.textContent = dataString;
  outBlock.innerHTML = '';
  outBlock.appendChild(preElement);
});

