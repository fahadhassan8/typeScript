// Callback Function
// ksi bhi function k argument me agr hum koi function ps kre to use call back kehty hen
var hello = function (Callback, newName) {
    Callback(newName);
};
var arrowFunc = function (name) {
    console.log("Hello ".concat(name));
};
hello(arrowFunc, 'Fahad');
