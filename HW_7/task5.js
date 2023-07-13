const block = document.getElementById('rsp');

function pressButton()
{
    const elem = document.createElement('p');
    elem.innerHTML = "I was pressed!";
    block.append(elem);
}

function mouseOnButton()
{
    const elem = document.createElement('p');
    elem.innerHTML = "Mouse on me!";
    block.append(elem);
}

function mouseOutButton()
{
    const elem = document.createElement('p');
    elem.innerHTML = "Mouse is not on me!";
    block.append(elem);
}

btn.addEventListener('click', pressButton);
btn.addEventListener('mouseover', mouseOnButton);
btn.addEventListener('mouseout', mouseOutButton);