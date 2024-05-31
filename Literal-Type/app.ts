// Literal Types and union

// Syntex

// let literalType : 'fahad' | 123 | [1,'a'] | true | {}
//  assigned particularly fixed value not changable

// let unionType : string | number | [] | {} | false
// we can give any name number array value etc

// Either string or number
let literalType : "fahad" | 123
literalType = 123;
console.log(literalType)

// Either string or number
let unionType : string | number;
unionType = 'fahad';
console.log(unionType)
