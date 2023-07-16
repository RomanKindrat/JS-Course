function reverseText(str)
{
    let arr = [];
    arr = str.split(/[" "]/).reverse();
    console.log(arr.join(', '));
}

reverseText("Java Script");