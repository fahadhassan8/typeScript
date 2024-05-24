//          INTERFACE

interface objType {
    name: string;
    roll: number;
    func: () => string;
    hobbies: string[];
    socialMedia: {
        s1: string;
        s2: string;
    };
    interst?:string
}

let obj:objType = {
    name: "fahad",
    roll: 123,
    func: () => 'Hello',
    hobbies:['cricket','gym'],
    socialMedia:{
        s1:'FB',
        s2:'IG'
    }
}
console.log(obj)

let obj2:objType = {
    name: "fahad",
    roll: 123,
    func: () => 'Hello',
    hobbies:['cricket','gym'],
    interst:'coding',
    socialMedia:{
        s1:'FB',
        s2:'IG'
    }
}
console.log(obj2)