let obj = {
    name: 'fahad',
    roll: 123456,
    salary:()=> 25000,
    age:25,
    hobbies: ['gym','cricket']
}
// console.log(obj.hobbies[1]);
// console.log(obj.salary());
// delete obj.roll
// console.log(obj);
// obj.class='SMIT'
// console.log('class' in obj);
for(let key in obj){
    console.log(key,obj[key]);
}
// console.log('email' in obj);
// console.log('name' in obj);