const headElem = document.querySelector('h1');
headElem.style.backgroundColor = '#2fff8d';
const list1 = document.getElementById('myDiv');
list1.children[0].style.fontWeight = 'bold';
list1.children[1].style.color = 'red';
list1.children[2].style.textDecorationLine = 'underline';
list1.children[3].style.fontStyle = 'italic';

const list2 = document.getElementById('myList');
for(let i = 0; i < list2.children.length; i++)
{
    list2.children[i].style.display = 'inline-block';
    list2.children[i].style.marginRight = '-4px';
}

const elem = document.querySelector('span');
elem.style.visibility = 'hidden';
