// Narrowing

// let a : string | number;
// a = 2.7859; // narrowing
// console.log(a.toFixed());
// a = 'BILAL'; //narrowing
// console.log(a.toLowerCase());

// let getType = (value: string | number) => {
//     if(typeof value === 'string'){
//         return console.log('its a string')
//     }
//     else{
//         value 
//         console.log('its a number')
//     }
// }
// getType(5)

// let getId = (id: string | null) => {
//     if(!id){
//         return 
//         console.log('kindly provide id')
//     }
//     else{
//         return id.toLowerCase()
//     }
// }
// getId('4321')