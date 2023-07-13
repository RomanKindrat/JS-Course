const btn = document.getElementById('btn');
const text = document.getElementById('text');

function changeCSS()
{
    text.style.color = "orange";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Comic Sans MS";
}

btn.onclick = changeCSS;