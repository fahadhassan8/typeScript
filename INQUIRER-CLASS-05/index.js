import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'Name',
        message: 'What is your name'
    },
    {
        type: 'number',
        age: '25',
        message: 'What is your age?'
    },
    {
        type: 'list',
        name: 'gender',
        message: 'What is your gender?',
        choices: ['Male', 'Female', 'Not to Say']
    }
]);
console.log(`Your Name is ${answer.name} Your Age is ${answer.age} Your Gender is ${answer.gender}`);
