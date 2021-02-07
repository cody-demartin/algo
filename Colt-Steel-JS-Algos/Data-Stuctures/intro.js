// What do they do?
//  Data structures are collections of values, the relationships among them, and the functions
//  or operations that can be applied to the data
//
// Why are there so many?
//  Different data structures excel at different things. Some are highly specialized, while others
//  like arrays aer more generally used
//
// Why care?
//  The more time you psend as a developer, the more likely you'll need to use one of these
//  You have worked with many of them unknowingly
//  Interviews
//
// Map/location data
//  Use a graph
//
// ES2015 Class Syntax
//  What is a class?
//      Predefined blueprint for creating objects with certain properties and methods

class Student {
    constructor(firstName, lastName, year) {
        // inside constructor this keyword refers to the individual instance of student 
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }   
    // instance methods examples
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}.`
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) return "You are donezo.";
        return `${this.tardies} latenesses.`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a, b){return a+b})
    }
    static enrollStudents() {
        return "ENROLLING STUDENTS"
    }
}


// better example of static class method
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// must instantiate new isntances of class to utilize the class definition 
let studentOne = new Student("Cody", "DeMartin", 7);
let studentTwo = new Student("Ellie", "Hwang", 5);

