class Marker
{
    constructor(color, amountInk)
    {
        this.color = color;
        this.amountInk = amountInk; 
    }

    Print(text)
    {
        let count = 0;
        for(let i = 0; this.amountInk >= 0.5 && i < text.length; i++)
        {
            count++;
            if(text[i] === " ")
                continue;
            this.amountInk -= 0.5;
        }
        console.log(`%c${text.substring(0, count)}`, `color: ${this.color}`);
    }
}

class MarkerPlus extends Marker
{
    refill(extraInk)
    {
        this.amountInk += extraInk;
    }
}


let marker = new MarkerPlus("red", 1.9);
marker.Print("H e l l o");
marker.refill(2.1);
marker.Print("H e l l o");
