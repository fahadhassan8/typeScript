// Short Circuit
var a = 5;
var b = 6;
var abc = function () { return console.log("Hello world"); };
// agar a true hy to function call krdo
// a && abc();
// agar a false hy to function call nhi hoga
// a == 6 && abc()
//ek sy zyada condition bhi kga skty hyn logical operator ki help sy
// a == 5 && b > 6 && abc()
a == 5 && b == 6 && abc();
