const list = document.querySelectorAll("li");
const arr = [];
for(let i = 0, j = list.length - 1; i <= j; i++, j--)
    if(i === j)
        arr.push(list[i].innerHTML);
    else
    {
        arr.push(list[i].innerHTML);
        arr.push(list[j].innerHTML);
    }

alert(arr);