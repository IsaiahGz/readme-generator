// Note: License badges are thanks to https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (license) {
		case 'MIT':
			return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
		case 'Apache 2.0':
			return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
		case 'GNU GPL v3':
			return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
		case 'BSD 3':
			return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
		case 'ISC':
			return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
		case '':
			return '';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	switch (license) {
		case 'MIT':
			return 'https://opensource.org/licenses/MIT';
		case 'Apache 2.0':
			return 'https://opensource.org/licenses/Apache-2.0';
		case 'GNU GPL v3':
			return 'https://www.gnu.org/licenses/gpl-3.0';
		case 'BSD 3':
			return 'https://opensource.org/licenses/BSD-3-Clause';
		case 'ISC':
			return 'https://opensource.org/licenses/ISC';
		case '':
			return '';
	}
}

// Outputs the string to place in the license sections
function renderLicenseSection(license) {
	if (!license) {
		return 'This project is not under any license.';
	} else {
		return `This project is under the [${license}](${renderLicenseLink(license)}) license`;
	}
}

// Function to generate markdown for README
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
${renderLicenseSection(license)}

## Contributing
${contributeRepo}

## Tests
To run tests, run the following command:
\`\`\`
${commandTest}
\`\`\`

## Questions
If you have any questions about this repository, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at [${username}](https://github.com/${username}).
`;
}

module.exports = generateMarkdown;
