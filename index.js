import { Employee } from "./employee.js";

// Objects
var person = {
    name: "Mounish",
    age: 28,
    skills: ["Java", "Angular", "React"],
    contact: {
        mobile: "9999999999",
        email: "vmounishkumar@gmail.com"
    },
    eat: function() {
        console.log("Eating...");
    },
    sleep() {
        console.log("Sleeping...");
    }
};

var name = person.name;
var age = person.age;
var skills = person.skills;
person.sleep();

// Destructuring
var { name, age, skills } = person;
console.log("Name:" + name + "  Age:" + age + "  Skills:" + skills);

// Template literals
console.log(`Name:${name}  Age:${age}  Skills:${skills}`);

// Multiline strings
var x = "I don't know what I am typing here.\nThis is just an example of multiline strings";
var x = `I don't know what I am typing here.
This is just an example of multiline strings`;
console.log(x);

// String methods
var bigString = "Hey there! I am using WhatsApp"
var smallString = "WhatsApp";
// Includes
if(bigString.indexOf(smallString) > -1) {
    console.log("Includes old");
}
if(bigString.includes(smallString)) {
    console.log("Includes new");
}
// Starts with
if(bigString.indexOf("Hey") === 0) {
    console.log("Starts with old");
}
if(bigString.startsWith("Hey")) {
    console.log("Starts with new");
}
// Ends with
var index = bigString.indexOf(smallString);
if(index === bigString.length - smallString.length) {
    console.log("Ends with old");
}
if(bigString.endsWith(smallString)) {
    console.log("Ends with new");
}


// var -> function level scope
// let -> block level scope
// const -> block level scope & values cannot be changed
function init() {
    for(let i = 0; i < person.skills.length; i++) {
        console.log(i);
    }
    // const name = "Mounish";
    // name = "Shan";
    // console.log(i);

    for(let index in person.skills) { // Array for in -> index
        console.log(index);
    }

    for(let value of person.skills) { // Array for of -> values
        console.log(value);
    }

    for(let key in person) { // Object for in -> keys
        console.log(key);
    }
}

init();

// Array
let arr = [
    1, 2, 'a', 'b', true, false, null,
    [ 1, 2 ],
    { name: 'Mounish', age: 28 }
];

// Spread operator - array
let arr1 = [ 'a', 'b' ];
let arr2 = [ 'd', 'e' ];
let arr3 = [ ...arr1, 'c', ...arr2, 'f' ];
console.log(arr3);

let detail = {
    name: 'Mounish',
    age: 28
};

let contact = {
    phone: '9999999999',
    email: 'vmounishkumar@gmail.com'
}

// Spread operator - object
let fullDetail = {
    ...detail,
    city: 'Chennai',
    ...contact
};
console.log(fullDetail);

// Default parameter
var multiply = function(x, y=1) {
    return x * y;
}
console.log(multiply(5));

// Rest parameter
var log = function(...x) {
    console.log(x);
}
log(1, 2, 'e', 'f');

// Arrow functions
var multiply = (x, y) => x * y;
let myMarks = [
    { subject: 'Maths', marks: 85 },
    { subject: 'Physics', marks: 65 },
    { subject: 'Chemistry', marks: 60 },
    { subject: 'Computer Science', marks: 90 }
];
var moreMarks = myMarks.filter(function(item) {
    return item.marks >= 80;
});
var moreMarks = myMarks.filter(item => item.marks > 80);
console.log(moreMarks);

// Callback functions
function myAlert() {
    alert("After 2 seconds");
}
setTimeout(myAlert, 2000);

setTimeout(() => {
    alert("After 2 seconds");
}, 2000);


// Classes, Modules & Inheritance
var person1 = {
    name: "Mounish",
    age: 28,
    sleep() {
        console.log("Sleeping...");
    }
};

var person2 = {
    name: "Mounish",
    age: 28,
    sleep() {
        console.log("Sleeping...");
    }
};

let emp1 = new Employee("Mounish", 28, 420);
emp1.work();
emp1.sleep();


// Falsy values are in below comment section
/*false
0
''
""
null
undefined
NaN*/
if(person !== undefined && person !== null && person.contact !== undefined && person.contact !== null) {
    console.log("Email:", person.contact.email);
}

if(person && person.contact) {
    console.log("Email:", person.contact.email);
}

console.log("Email:", person && person.contact && person.contact.email);