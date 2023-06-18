
let income = Number(prompt("Enter Vasyl`s income"));
let delays = Number(prompt("Enter number of delays"));
let delays_sum = Math.floor(delays / 3) * 20;
alert(Math.ceil((income + delays_sum) / 50) * 100); // скільки рядків коду треба написати


let lines = Number(prompt("Enter number of lines of code"));
income = Number(prompt("Enter Vasyl`s income"));
let extra_money = income - Math.floor(lines / 100) * 50;
alert(Math.floor(extra_money / 20) * 3 + 2); // сакільки разів може запізнитись


lines = Number(prompt("Enter number of lines of code"));
delays = Number(prompt("Enter number of delays"));
income = Math.floor(lines / 100) * 50 - Math.floor(delays / 3) * 20; //скільки грошей заплатять
if(income >= 0) alert(income);
else alert(0); 