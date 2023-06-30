class MonthException extends Error
{
    constructor(message)
    {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month)
{
    if(month < 1 || month > 12)
        throw new MonthException("Incorect month number");
    switch (month) {
        case 1:
            return "Jenuary";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August"
            break;
        case 9:
            return "September"
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
            break;
    }
}

try
{
    console.log(showMonthName(10));  // May
    console.log(showMonthName(14)); // MonthException Incorrect month number
}
catch(error)
{
    console.log(error.name);
    console.log(error.message);
}