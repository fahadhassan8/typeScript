// Implement Clauses
// Extend vs Implement
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.dailyWork = function () { };
    return Human;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.dailyWork = function () { };
    return Person;
}());
var person = new Person();
console.log(person.name);
