isAdult = prompt("Enter your age");
if(isAdult >= 18 && isAdult <= 100)
    alert("You have reached the age of majority");
else if(isAdult >= 0 && isAdult <= 18)
    alert("You are still too young");
else
    alert("You have entered an incorrect age");
    