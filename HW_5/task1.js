class Circle
{
    constructor(x,y,r)
    {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    circuit()
    {
        return 2 * Math.PI * this.r;
    }

    static circuit(r)
    {
        return 2 * Math.PI * r;
    }

    copy()
    {
        return Object.assign(new Circle(), this);
    }

    static newCircle(x, y, r)
    {
        return new Circle(x,y,r);
    }

    isPointInCircle(pointX, pointY)
    {
        return Math.sqrt(Math.pow(this.x - pointX, 2) + Math.pow(this.y - pointY, 2)) <= this.r;
    }

    circleToString()
    {
        return `Сoordinates of the center of the circle: (${this.x},${this.y}) - circle radius: ${this.r}`
    }
}




let circle1 = new Circle(2, 2, 6);
console.log(circle1.circuit());
console.log(Circle.circuit(6));
let circle2 = circle1.copy();
console.log(circle2.circuit());
let circle3 = Circle.newCircle(3, 3, 5);
console.log(circle3.circleToString());
console.log(circle3.isPointInCircle(2, 2));

