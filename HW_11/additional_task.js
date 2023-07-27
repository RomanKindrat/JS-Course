const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
    let time;
    for(let i = 0; i < 10; i++)
    {
        time = parseInt(Math.random() * 4);

        number = await delay(i, time * 1000);
        console.log(number);
    }
}
showNumbers();