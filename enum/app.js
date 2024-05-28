// Enum
// is a set of value
// which return index or define index
// or return value
// Syntex
// enum abc {}
var students;
(function (students) {
    students[students["bilal"] = 0] = "bilal";
    students[students["tehsin"] = 1] = "tehsin";
    students[students["ahmed"] = 2] = "ahmed";
})(students || (students = {}));
// for index
var student = students.ahmed;
console.log(student);
// for value
// const test:string = students[0];
// console.log(test)
// Define Index
// enum students{
//     bilal=10,tehsin,ahmed
// }
// const student:students = students.ahmed
// console.log(student)
// Define Value
// enum students{
//     bilal="bilai",tehsin='tehsin',ahmed='ahmed'
// }
// const student:students = students.ahmed
// ?console.log(student)
