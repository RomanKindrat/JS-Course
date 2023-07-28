const xhr = new XMLHttpRequest();

const btn = document.getElementById('btn');
btn.onclick = () => {
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            const data = JSON.parse(xhr.responseText);
            btn.style.display = 'none';
            showData(data);
        }
    }
    xhr.open('GET', 'http://localhost:5000', true);
    xhr.send();
}

function showData(data)
{
    const authors = document.getElementById('authors');
    data.forEach(book => {
        const authorName = book.author;
        const listItem = document.createElement('li');
        listItem.textContent = authorName;
        authors.appendChild(listItem);
    });
}



