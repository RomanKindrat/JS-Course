function sumSliceArray(arr, first, second)
{
    if(isNaN(+first) || isNaN(+second))
        throw new Error("One or both parameters is not a number!");
    if(first < 1 || first > arr.length || second < 1 || second > arr.length)
        throw new Error("One or both parameters are out of range of the array!");
    return arr[first - 1] + arr[second - 1];
}

try
{
    const mas = [4, 6, 1, 10, 3, 3, 14, 5, 18, 2, 0, 1];
    console.log(mas);
    const sum = sumSliceArray(mas, prompt("a = ..."), prompt("b = ..."));
    console.log(sum);
} 
catch (error) 
{
    console.log(error.message); 
}
