let newMain = document.createElement('main');
newMain.classList.add("mainClass");
newMain.classList.add("check");
newMain.classList.add("item");
let newDiv = document.createElement('div');
newDiv.classList.add("myDiv");
let newP = document.createElement('p');
newP.textContent = "First paragraph";
newMain.append(newDiv);
newDiv.append(newP);

let item = document.querySelector('body');
item.append(newMain);
