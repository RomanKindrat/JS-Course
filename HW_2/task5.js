let time = new Date().getHours();

if(time == 23 || time <= 5)
    alert("Good night");
else if(time > 5 && time <= 11)
    alert("Good morning")
else if(time > 11 && time <= 17)
    alert("Good day")
else if(time > 17 && time < 23)
    alert("Good evening")
    

switch (time) {
    case 23: case 0: case 1: case 2: case 3: case 4: case 5:
        console.log("Good night");
        break;
    case 6: case 7: case 8: case 9: case 10: case 11:
        console.log("Good morning");
        break;
    case 12: case 13: case 14: case 15: case 16: case 17:
        console.log("Good day");
        break;
    case 18: case 19: case 20: case 21: case 22:
        console.log("Good evening");
        break;
}