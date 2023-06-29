function calcRectangleArea(width, height)
{
    if(isNaN(width) || isNaN(height))
        throw new Error("Width or height is not number")
    return width * height;
}

try
{
    let a = prompt("a = ");
    let b = prompt("b = ");
    let area = calcRectangleArea(a, b);
    console.log(area);

}
catch(error)
{
    console.log(error.message);
}