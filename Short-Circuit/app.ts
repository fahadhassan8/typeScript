// Short Circuit

let a = 5;
let b = 6;
let abc = () => console.log("Hello world");

// agar a true hy to function call krdo
// a && abc();
// agar a false hy to function call nhi hoga
// a == 6 && abc()
//ek sy zyada condition bhi kga skty hyn logical operator ki help sy

// a == 5 && b > 6 && abc()
a == 5 && b == 6 && abc()