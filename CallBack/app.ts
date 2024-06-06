// Callback Function
// ksi bhi function k argument me agr hum koi function ps kre to use call back kehty hen

let hello = (Callback:(name: string) => void,newName) => {
    Callback(newName)
}

let arrowFunc = (name:string) =>{
    console.log(`Hello ${name}`)
}

hello(arrowFunc,'Fahad');