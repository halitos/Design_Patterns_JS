class Employee {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log("I am employee " + this.name);
    }
}

class EmployeeFactory {
    create(name) {
        return new Employee(name); 
    }
}

class Vendor {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log("I am vendor " + this.name);
    }
}

class VendorFactory {
    create(name) {
        return new Vendor(name);
    }
}

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Alan Partridge"));
    persons.push(employeeFactory.create("Mr T"));
    persons.push(vendorFactory.create("Kate Bush"));
    persons.push(vendorFactory.create("James Bond"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}

run();
