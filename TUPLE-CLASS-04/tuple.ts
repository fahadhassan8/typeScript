// Tuple in TypeScript
// A Tuple is a typed array
// With a pre-defined length
// And types for each index

let tupArr:
[string,number,boolean,string,boolean,number,{school:string}?] = [
    // ? mark for optional if remove showing error
    'Fahad',
    123,
    true,
    'hassan',
    false,
    321,
]
tupArr.push({school:"SMIT"})
console.log(tupArr);