function checkEmail(email)
{
    const pattern = /^[A-Za-z0-9]+(-?_*[A-Za-z0-9]+)*@[A-Za-z0-9]+(-?_*[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

    if(pattern.test(email))
        console.log("Email is correct!");
    else
        console.log("Email is not correct!");
}

checkEmail('my_mail@gmail.com');

checkEmail('#my_mail@gmail.com');

checkEmail('my_ma--il@gmail.com');

checkEmail('my__ma-il@gmail.com');
