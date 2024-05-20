import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"Whats your name"
    },
    {
        type:"number",
        name:"age",
        message:"Whats your age"
    },
    {
        type:"list",
        name:"gender",
        message:"Whats your gender",
        choices:['Male','Female',"Prefer not to say"]
    }
]);
console.log(`Your name is ${answer.name} Your age is ${answer.age} Your gender is ${answer.gender}`);