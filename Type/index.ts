//      Type reserved key

// Syntex

type idType = number;
type nameType = string;
type ageType = number;

type employeeType = {
    empId: number | string;
    empName: string;
    empAge: number;
}

let id:idType = 123;
let nam:nameType = 'fahad';
let age:idType = 25;

let employee:employeeType = {
    empId: id,
    empName: nam,
    empAge: age
}
console.log(employee)

let employee2:employeeType = {
    empId: '321',
    empName: 'hassan',
    empAge: 26
}
console.log(employee2)
