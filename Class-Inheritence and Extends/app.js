var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes in TypeScript
var School = /** @class */ (function () {
    function School(n) {
        this.student = [];
        this.name = n;
    }
    School.prototype.addStudent = function (stObj) {
        this.student.push(stObj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(n, a, s) {
        this.name = n;
        this.age = a;
        this.schoolNam = s;
    }
    return Student;
}());
var school1 = new School('Alpha');
var school2 = new School('Beta');
// console.log(school1,school2);
var stu1 = new Student('Fahad', 25, school1.name);
var stu2 = new Student('Adeel', 25, school2.name);
// console.log(stu1,stu2)
school1.addStudent(stu1);
school2.addStudent(stu2);
// console.log(school1,school2);
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var techer1 = new Teacher('Ghous', 30, school1.name);
var teacher2 = new Teacher('Bilal', 45, school2.name);
school1.addStudent(techer1);
school2.addStudent(teacher2);
console.log(school1, school2);
