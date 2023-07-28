const btn = document.getElementById('btn');
btn.onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            const response = xhr.responseText;
            document.getElementById('btn').innerText = response;
        }
    }
    xhr.open('GET', 'http://localhost:5000', true);
    xhr.send();
};

