class Person
{
    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
    }

    showFullName()
    {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person
{
    constructor(name, surname, year)
    {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName)
    {
        return `${super.showFullName()} ${middleName}`;
    }

    showCourse()
    {
        return new Date().getFullYear() - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
