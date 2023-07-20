new Promise(function (resolve, reject) {
    const number = prompt("Enter any number");
    if (isNaN(number))
        reject();
    else
        resolve(number);
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        do {
            number = prompt("Enter any number");
        } while (isNaN(number));
        resolve(number);
    });
}).then(function (result) {
    console.log(result)
});