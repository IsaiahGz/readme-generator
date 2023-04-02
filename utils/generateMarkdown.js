// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Outputs the string to place in the license sections
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	const { username, email, projectName, projectDescription, license, commandInstall, commandTest, useRepo, contributeRepo } = data;
	return `# ${projectName}
${renderLicenseBadge(license)}

## Description
${projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${commandInstall}
\`\`\`

## Usage
${useRepo}

## License
${renderLicenseSection()}

## Contributing
${contributeRepo}

## Tests
To run tests, run the following command:
\`\`\`
${commandTest}
\`\`\`

## Questions
If you have any questions about this repository, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at (${username})[https://github.com/${username}].
`;
}

module.exports = generateMarkdown;
