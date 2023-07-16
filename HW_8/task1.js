function upperCase(str)
{
    const pattern = /^[A-Z]/;
    if(pattern.test(str))
        console.log("String's starts with uppercase character");
    else
        console.log("String's not starts with uppercase character");
}

upperCase('regexp'); 

upperCase('RegExp');