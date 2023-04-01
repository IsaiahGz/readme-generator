// Import libraries
const fs = require('fs');
const inquirer = require('inquirer');

// Questions array to pass to inquirer
const questions = [
	{
		type: 'input',
		name: 'username',
		message: 'What is your GitHub username?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	},
	{
		type: 'input',
		name: 'projectName',
		message: "What is your project's name?",
	},
	{
		type: 'input',
		name: 'projectDescription',
		message: 'Write a short description for your project:',
	},
	{
		type: 'list',
		name: 'license',
		message: 'Which license do you want your project to use?',
		choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
	},
	{
		type: 'input',
		name: 'commandRun',
		message: 'What command should be run to install dependencies?',
		default: 'npm i',
	},
	{
		type: 'input',
		name: 'commandTest',
		message: 'What command should be run to execute tests?',
		default: 'npm run test',
	},
	{
		type: 'input',
		name: 'useRepo',
		message: 'What does a user need to know about using the repository?',
	},
	{
		type: 'input',
		name: 'contributeRepo',
		message: 'What does a user need to know about contributing to the repository?',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Starter function
async function init() {
	const response = await inquirer.prompt(questions);
	console.log(response);
}

// Function call to initialize app
init();
