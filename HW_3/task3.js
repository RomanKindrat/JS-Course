function randArray(k)
{
    const min = 1;
    const max = 500;
    let arr = [];
    for(let i = 0; i < k; i++)
    {
        arr.push(parseInt(min + Math.random() * (max - min + 1)));
    }
    return arr;
}

console.log(randArray(10));