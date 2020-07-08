export class Human {

    name;

    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(this.name, "is eating");
    }

    sleep() {
        console.log(this.name, "is sleeping");
    }
}