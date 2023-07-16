function checkCardNumber(card)
{
    const pattern = /^[0-9]{4}[\s-]?[0-9]{4}[\s-]?[0-9]{4}[\s-]?[0-9]{4}$/

    if(pattern.test(card))
        console.log("The number of card is valid!")
    else
        console.log("The number of card is not valid!")
}

checkCardNumber("5435-6207-1351-5938");