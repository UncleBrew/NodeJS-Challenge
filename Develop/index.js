// TODO: Include packages needed for this application
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  message: `What's your GITHUB username?`,
  name: 'name',
},
{
  type: 'input',
  message: `What's your email address?`,
  name: 'emailAddress',
},
{
  type: 'input',
  message: `What's your project's name?`,
  name: 'projectName',
},
{
  type: 'input',
  message: `Please write a short description of your project`,
  name: 'description',
},
{
  type: 'list',
  message: `What kind of license should your project have?`,
  choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  name: 'license',
},
{
  type: 'input',
  message: `What command should be run to install dependencies?`,
  name: 'dependencies',
},
{
  type: 'input',
  message: `What command should be ran to run tests?`,
  name: 'tests',
},
{
  type: 'input',
  message: `What does the user need to know about using the repo?`,
  name: 'repo',
},
{
  type: 'input',
  message: `What does the user need to know about contributing to the repo?`,
  name: 'contribution'
},

];

// TODO: Create a function to write README file
function writeToFile(filename, response) {
  const readme = generateMarkdown(response);

  fs.writeFile(filename, readme, (err) =>
    err ? console.error(err) : console.log('Successfully created the README.md file'))
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile('README.md' , response)
    );
}

// Function call to initialize app
init();
