// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "NONE") {
    return '';
}

const badges = {'MIT':'![MIT License](https://img.shields.io/badge/License-MIT-red.svg)',
 'APACHE': '![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-red.svg)',
 'GPL': '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-red.svg)'};

return badges[license] || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  const licenseLinks = {'MIT':'https://opensource.org/licenses/MIT',
 'APACHE': 'http://www.apache.org/licenses/LICENSE-2.0',
 'GPL': 'https://www.gnu.org/licenses/gpl-3.0'};

  if (!license || license === "NONE") {
    return '';
}

return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license || license === "NONE") {
    return '';
}

const licenseBadge = renderLicenseBadge(license);
const licenseLink = renderLicenseLink(license);

const licenseSection = `
## License

${licenseBadge}

This project is licensed under the ${license} license. See ${licenseLink} for more details.
`;

return licenseSection.trim();
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}

  ##Table of Contents
  * Installation

  ## Installation
  To install run the following commands:

  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Test

  ${data.test}

  ## Questions

  ${data.email}
  ${data.github}

  ## License 
  ${renderLicenseSection(data.license)}



`;
}

module.exports = generateMarkdown;
