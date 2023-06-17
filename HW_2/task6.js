let arr = [2, 9, 0, 5, 0, 5, 6, 1, 5, 2, 8, 4, 7, 8, 5, 0, 2];
console.log(arr);
let result; // число, яке найбільше раз зустрічається в масиві
let max = 0; // максимальна кількість одинаковиx елементів в масиві
let counter = 0; // зберігає кількість таких же чисел в масиві (для кожного елемента масива)
arr.forEach(a => {
    counter = 0;
    arr.forEach(b => {
        if(b == a) counter++;
    });
    if(counter > max)
    {
        result = a
        max = counter;
    }  
});
console.log(result);

console.log(arr.filter(a => a != result));
