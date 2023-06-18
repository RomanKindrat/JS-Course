const a = Number(prompt("a = ..."));
const b = Number(prompt("b = ..."));
const c = Number(prompt("c = ..."));
if(isNaN(a) || isNaN(b) || isNaN(c) || a >= (b + c) || b >= (a + c) || c >= (a + b))
    alert("Incorrect data");
else
{
    p = (a + b + c) / 2;
    const S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    const check = c == (Math.sqrt(Math.pow(a,2) + Math.pow(b,2))) || b == (Math.sqrt(Math.pow(a,2) + Math.pow(c,2))) || a == (Math.sqrt(Math.pow(b,2) + Math.pow(c,2)));
    if(check)
        console.log("The triangle is right-angled");
    else
        console.log("The triangle is not right-angled");
    console.log("S = ", S.toFixed(3));
}    


