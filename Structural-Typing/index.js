// Structural Typing
var std = {
    name: 'fahad',
    id: 9
};
console.log(std);
var tech = {
    name: 'Bilal',
    id: 10,
    age: 42
};
console.log(tech);
// std = tech // it wont show any error cz tech have student both c=values themselves
// but in this case it wll show error cz age is not defined in stdType and it is fresh for this std here
// std = {
//     name:'Bilal',
//     id:10,
//     age:42
// }
// tech = stu // it will show error cz std dont have tech third prop
