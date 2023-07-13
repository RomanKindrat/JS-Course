btn.onclick = () =>
{
    const select = document.getElementById('mySelect');
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption)
        select.removeChild(selectedOption);
}
