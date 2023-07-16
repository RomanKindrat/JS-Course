function checkEmail(email)
{
    const pattern = /^\w{3,}@[a-z]+\.[a-z]{2,}$/;

    if(pattern.test(email))
        return true;
    else
        return false;
}

console.log(checkEmail("Qmail2@gmail.com"));