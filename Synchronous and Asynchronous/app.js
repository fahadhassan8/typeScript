// Synchronous method
// Line by Line
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// Asynchronous method
// console.log(1)
// console.log(2)
// setTimeout(function(){
//     console.log(3)
// },3000)
// console.log(4)
// console.log(5)
console.log(1);
console.log(2);
setTimeout(function () {
    console.log(3);
}, 1000);
for (var i = 0; i <= 5; i++) {
    console.log("Hello ".concat(i));
}
