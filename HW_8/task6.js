function checkLogin(login)
{
    const pattern = /^[A-Za-z][A-Za-z0-9.]{1,9}$/;

    if(pattern.test(login))
        console.log(true);
    else
        console.log(false);

    const numbers = login.match(/[0-9]+(\.[0-9]+)?/g);
    console.log(numbers.join(', '));
}

checkLogin('ee1.1ret3');

checkLogin('ee1*1ret3');


