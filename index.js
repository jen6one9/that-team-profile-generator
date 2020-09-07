var inquirer = require("inquirer");
const fs = require('fs');
// const util = require('util');

// Prompt the user with questions
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your role within the team?",
            name: "Title"
            // console.log(response.Title)

        },
        {
            type: "input",
            message: "What is your email address?",
            name: "Email"
            // console.log(response.Email)



        },
        {
            type: "input",
            message: "What is your GitHub profile?",
            name: "GitHub"
            // console.log(response.GitHub)

        },

        {
            type: "input",
            message: "Please provide your employee ID.",
            name: "EmployeeNumber"
            // console.log(response.EmployeeNumber)

        },
        {
            type: "input",
            message: "What school did you graduate from?",
            name: "Uni"
            // console.log(response.Uni)

        },

    ])

    .then(function (response) {
        console.log(response);
        var READMEdata = `
# ${response.Title}

## Developer Profile
https://github.com/${response.GitHubUser}

## Description

${response.Description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)

## Installation
${response.Installation}

##  Usage
${response.Usage}

##  License
![GitHub license](https://img.shields.io/badge/license-${response.License}-blue.svg)


##  Contributions
${response.Contributions}

##  Tests
${response.Tests}

##  Questions
Please reach out to me with any questions via ${response.Email}`
        console.log(READMEdata);
        fs.writeFileSync("./README.md", READMEdata, function () {
            console.log("READMEgenerated");
        })
    })
    .catch(function (error) {
        console.log('error', error);

 
    });


