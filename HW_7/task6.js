window.addEventListener('resize', () =>
{
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById('size').innerHTML = 'Width: ' + width + ', Height: ' + height;
});