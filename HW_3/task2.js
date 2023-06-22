let a = 5;
let b = 10;
const start = a;
const end = b;
for (let i = 1; i < end - start + 2; i++) {
    for(let j = 0; j < i; j++)
    {
        temp = a;
        console.log(temp++);
    }
       a++;
}