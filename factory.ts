// The Factory pattern is a creational design pattern in JavaScript that provides a way to create objects
// without specifying the exact class of the object that will be created. The Factory pattern allows you to create objects through a single, 
// unified interface, rather than having to create objects directly using the new operator or calling a constructor function.
// Here is a simple example of how the Factory pattern can be implemented in JavaScript:
// Factory function

// EX1
interface Employee {
    type: string;
    say: () => void;
}
function createEmployee(type: string): Employee {
    let employee;

    if (type === 'full-time') {
        employee = new FullTime();
    } else if (type === 'part-time') {
        employee = new PartTime();
    } else if (type === 'temporary') {
        employee = new Temporary();
    } else if (type === 'contractor') {
        employee = new Contractor();
    }

    employee.type = type;

    employee.say = function () {
        log.add(this.type + ": rate " + this.hourly + "/hour");
    };

    return employee;
}

// Full-time employee class
function FullTime() {
    this.hourly = "$12";
}

// Part-time employee class
function PartTime() {
    this.hourly = "$11";
}

// Temporary employee class
function Temporary() {
    this.hourly = "$10";
}

// Contractor employee class
function Contractor() {
    this.hourly = "$15";
}

// Logger
let log = (function () {
    let log = "";

    return {
        add: function (msg) {
            log += msg + "\n";
        },
        show: function () {
            console.log(log);
            log = "";
        }
    }
})();


function run() {
    const employees = [
        createEmployee('full-time'),
        createEmployee('part-time'),
        createEmployee('temporary'),
        createEmployee('contractor'),
    ];

    employees.forEach(employee => employee.say());

    log.show();
}

run();