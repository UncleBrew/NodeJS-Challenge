// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `${license}(https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    return `https://github.com/UncleBrew/NodeJS-Challenge/blob/main/LICENSE`;
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `${license} License`;
  }
  else{
    return '';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licenese
  ${renderLicenseBadge(data.license)}

  ## Tests
  ${data.tests}

`;
}

export default generateMarkdown;
