class Worker
{
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays)
    {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary()
    {
        console.log(this.dayRate * this.workingDays);
    }

    showSalaryWithExperience()
    {
        console.log(this.dayRate * this.workingDays * this.#experience);
    }

    getSalaryWithExperience()
    {
        return this.dayRate * this.workingDays * this.#experience;
    }

    get showExp()
    {
        return this.#experience;
    }
    set setExp(newExperience)
    {
        this.#experience = newExperience;
    }

    static sortWorkerBySalary(workers)
    {
        return workers.sort((a, b) => a.getSalaryWithExperience() - b.getSalaryWithExperience())
    }
}



let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();


let worker2 = new Worker("Stepan Koval", 50, 15);
worker2.setExp = 1.8;
let worker3 = new Worker("Ihor Tadar", 80, 21);
worker3.setExp = 1.1;
let worker4 = new Worker("Bohdan Lopata", 40, 18);
worker4.setExp = 1.3
let worker5 = new Worker("Maksym Prut", 100, 19);

let workers = [worker1, worker2, worker3, worker4, worker5];

console.log("\n");
console.log("Sorted workers:");
console.log("\n");

let sortedWorkers = Worker.sortWorkerBySalary(workers);
sortedWorkers.forEach(worker => {
    console.log(`${worker.fullName}: ${worker.getSalaryWithExperience()}`)
});
