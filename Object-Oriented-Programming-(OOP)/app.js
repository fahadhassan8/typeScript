//ES6 Introduce JavaScript Classes
// JavaSccript Classes are templates for JavaScript Objects
// CLasses is a blue print of object
// Syntax
var Student = /** @class */ (function () {
    function Student(n, g, r) {
        this.name = n;
        this.gender = g;
        this.rollNum = r;
    }
    Student.prototype.studentFunc = function () {
        return "Hi my name is ".concat(this.name, " i am ").concat(this.gender, " and my roll number is ").concat(this.rollNum);
    };
    return Student;
}());
// Object
var student1 = new Student("Fahad", "Male", 250);
var student2 = new Student("Adeel", "Male", 200);
var stuData = [];
stuData.push(student1);
stuData.push(student2);
console.log(stuData);
console.log(student1.studentFunc());
// console.log(student1,student2)
