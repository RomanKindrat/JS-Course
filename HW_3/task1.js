function createArray(start, end)
{
    let arr = [];
    for(let i = start; i <= end; i++)
        arr.push(i);
    return arr;
}

let arr = createArray(4, 12);
console.log(arr);