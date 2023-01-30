class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

function run() {
    const person = new Person('Alan', 50);
    person.getDetails();
}

run();
