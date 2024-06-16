// Classes in TypeScript
class School{
    name: string;
    student:Teacher[]=[];
    addStudent(stObj:Teacher){
        this.student.push(stObj)
    }
    constructor(n:string){
        this.name = n;
    }
}
const school1 = new School('Alpha')
const school2 = new School('Beta')
// console.log(school1,school2);

// 2nd class
class Student {
    name:string;
    age:number;
    schoolNam:string;
    constructor(n:string,a:number,s:string){
        this.name = n;
        this.age = a;
        this.schoolNam = s;
    }
}

const stu1 = new Student('Fahad',25,school1.name)
const stu2 = new Student('Adeel',25,school2.name)
// console.log(stu1,stu2)

school1.addStudent(stu1)
school2.addStudent(stu2)
// console.log(school1,school2);

// 3rd class
class Teacher extends Student{}

const techer1 = new Teacher('Ghous',30,school1.name);
const teacher2 = new Teacher('Bilal',45,school2.name);

school1.addStudent(techer1)
school2.addStudent(teacher2)
console.log(school1,school2);
