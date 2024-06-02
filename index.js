// TODO: Include packages needed for this application
//This code snippet imports the 'inquirer' module in Node.js.
// 'inquirer' is a powerful and flexible library for creating interactive command-line prompts.
// It allows you to collect user input in a variety of formats, such as text, list selections,  confirmations, and more.
const inquirer = require('inquirer');
//The 'path' module in Node.js provides utilities for working with file and directory paths.
const path = require('path');
// importing the `fs` module in Node.js enables interaction with the file system
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHUb username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe what your project is about.",
    },
    {
        type: "list",
        name: "license",
        message: "What license(s) should your project have?",
        choices: ["MIT", "APACHE", "GPL", "NONE"]
    },
    {
        type: "input",
        name: "installations",
        message: "What are the steps to install your dependencies?",
    },
    {
        type: "input",
        name: "test",
        message: "What commands should be ran to test?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo?"
    },
    {
        type: "input",
        name: "contributions",
        message: "What does a user need to know about contributing?"
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(path.join(process.cwd(), fileName), data);
        console.log(`Data successfully written to ${fileName}`);
    } catch (error) {
        console.error(`Error writing to file ${fileName}:`, error);
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README......");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
