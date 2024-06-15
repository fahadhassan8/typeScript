// Implement Clauses

// Extend vs Implement

class Human {
    name: 'Fahad';
    age: 25;
    dailyWork(){}
}
interface Practice{
    game: string;
    cricket():void
    test?():void
}
class Person implements Human,Practice {
    name: 'Ahad';
    age: 20;
    dailyWork(): void{};
    game:'cricket';
    cricket(): void {
        
    }
    email:'abc@abc.com'
}
let person = new Person()
console.log(person.name,person.age)