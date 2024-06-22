// try catch
// Syntax
// try()catch(){}
// synchronous line by line
// asynchronous
// error handling
// console.log('start');
// try {
//     // @ts-ignore
//     // let a = 'Fahad';
//     console.log(a)    
// } catch (error) {
//     console.log('Error')
// }
// console.log('end')
var func = function () {
    try {
        for (var i = 0; i <= 5; i++) {
            // @ts-ignore
            console.log(a);
        }
    }
    catch (error) {
        console.log('Error in loop');
    }
};
func();
console.log('object');
// let func = async() => {
//     try {
//         let fetchData = await fetch('https://jsonplaceholder.typicode.com/posts/2');
//         let res = (await fetchData).json()
//         console.log(res);
//     } catch (error) {
//         console.log("Error in API")
//     }
// }
// func()
// console.log('object')
