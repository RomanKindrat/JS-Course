function arraySplit(arr)
{
    let newArr = [];
    let typeArr = [];

    for(let item of arr)
    {
        if(typeArr.indexOf(typeof item) == -1)
            typeArr.push(typeof item);
    }

    for(let i = 0; i < typeArr.length; i++)
    {
        newArr[i] = [];
        for(let item of arr)
            if(typeof item == typeArr[i])
                newArr[i].push(item);
    }
    
    return newArr;
}

let  arr = [5, "Limit", 12, "a", "3", 99, true, 2, 2, 4, 3, "33", "a", "text", "strong", false, "broun"];
console.log(arr);
let arrNew = arraySplit(arr);
console.log(arrNew);