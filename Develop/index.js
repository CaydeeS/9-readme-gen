// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the install instructions for the project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the purpose and possible usage for the project'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Should others attempt to contribute? Y/N'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter how to test this project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project',
        choices: ['apgl', 'apache', 'mit', 'none']
    }
        


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
