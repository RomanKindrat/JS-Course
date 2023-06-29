function chekAge()
{
    const name = prompt("Name:");
    const age = prompt("Age:");
    const status = prompt("Status (admim, moderator, user):");
    if(name.length == 0 || age.length == 0 || status.length == 0)
        throw new Error("The field is empty! Please enter all required data");
    if(age < 18 || age > 70)
        throw new RangeError();
    if(status != "admin" && status && "moderator" && status != "user")
        throw new EvalError();
    if(isNaN(+age))
        throw new TypeError();
    
    console.log("You got access to watch the movie");
}

try
{
    chekAge();
} 
catch (error)
{
    console.log(error.name);
    console.log(error.message);
}