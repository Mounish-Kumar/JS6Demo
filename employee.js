import { Human } from "./human.js";

export class Employee extends Human {

    empId;

    designation;

    constructor(name, age, empId, designation="Developer") {
        super(name, age);
        this.empId = empId;
        this.designation = designation;
    }

    work() {
        console.log(this.name, "is working as a", this.designation);
    }
}