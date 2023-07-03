function propsCount(currentObject)
{
    let count = 0;
    for (const property in currentObject)
    {
        count++;
    }
    return count;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development"
};

console.log(propsCount(mentor));