function findUnique(arr)
{
    let newArr = [];
    for(let item of arr)
        if(newArr.indexOf(item) != -1)
            return false;
        else
            newArr.push(item);
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));