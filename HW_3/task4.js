function compact(arr)
{
    let newArr = [];
    for (const item of arr)
        if(newArr.indexOf(item) == -1)
            newArr.push(item);
    return newArr;
}

const arr = [4,5,8,12,4,9,0,2,4,8,18,5];
console.log(arr);
arr2 = compact(arr);
console.log(arr2);