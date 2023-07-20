function calcArrProduct(arr)
{
    return new Promise((resolve, reject) =>
    {
        let result = 1;
        for (const elem of arr) {
            if(typeof elem === 'number')
                result *= elem;
            else
                reject("Error! Incorrect array!");
        }
        resolve(result);
    })
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result), error => console.log(error));
// "Error! Incorrect array!"