// Structural Typing

// type stdType = {
//     name: string
//     id: number
// }
// let std:{[x: string]:any;
//     id: number;} = {
//         fname: 'fahad',
//         id:7
// }
// console.log(std)

// interface stdType  {
//     name: string
//     id: number
// }
// let std:{[z:string]:any,id:number}={
//     fName:"Fahad",
//     id:8
// }
// console.log(std)

interface stdType {
    name: string
    id: number
}
interface techType {
    name: string
    id: number
    age:number
}
let std:stdType = {
    name:'fahad',
    id:9
}
console.log(std)

let tech:techType = {
    name:'Bilal',
    id:10,
    age:42
}
console.log(tech)

// std = tech // it wont show any error cz tech have student both c=values themselves
// but in this case it wll show error cz age is not defined in stdType and it is fresh for this std here
// std = {
//     name:'Bilal',
//     id:10,
//     age:42
// }
// tech = stu // it will show error cz std dont have tech third prop
