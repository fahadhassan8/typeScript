// Syntex
// interface xyz extend abc{}

// interface Emp {
//     name: string;
//     num: number;
// }
// interface Director extends Emp{
//     email: string
// }

// interface Person extends Emp {
//     role: true,
//     email?:string
// }

// let emp:Emp = {
//     name:'kashif',
//     num:432
// }
// console.log(emp);

// let director:Director = {
//     name:'Fahad',
//     num:432,
//     email:"fahad@gmail.com"
// }
// console.log(director);

// let person:Person = {
//     name:'ghous',
//     num:432,
//     email:"ghous@gmail.com",
//     role:true
// }
// console.log(person);


// merge

interface Emp {
    name: string;
    num: number;
}
interface Emp {
    email:string
}
let emp:Emp = {
    name: 'fahad',
    num: 123,
    email:'abc@abc.com'
}
console.log(emp)