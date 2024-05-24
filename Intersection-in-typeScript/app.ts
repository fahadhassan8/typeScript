// Intersection
// combination of type
//Syntex
// type abc = type1 & type2

type personalDetail = {
    name: string
    age: number
}
type professionalDetail = {
    class: string
    email: string
    roll: number
}
type abc = {
    salary: number
}

// Intersection
type Person = personalDetail & professionalDetail & abc

let person:Person = {
    name: 'fahad',
    age:24,
    class:'AI',
    email:'abc@abc.com',
    roll:123,
    salary:5000
}
console.log(person)