//ES6 Introduce JavaScript Classes

// JavaSccript Classes are templates for JavaScript Objects

// CLasses is a blue print of object

// Syntax
class Student {
  name: string;
  gender: string;
  rollNum: number;

  constructor(n: string, g: string, r: number) {
    this.name = n;
    this.gender = g;
    this.rollNum = r;
  }
  studentFunc(){
    return `Hi my name is ${this.name} i am ${this.gender} and my roll number is ${this.rollNum}`
  }
}
// Object
const student1 = new Student("Fahad", "Male", 250);
const student2 = new Student("Adeel", "Male", 200);

const stuData: Student[] = [];

stuData.push(student1);
stuData.push(student2);
console.log(stuData);
console.log(student1.studentFunc())
// console.log(student1,student2)
