var inquirer = require("inquirer");
const fs = require('fs');
// const util = require('util');

// Prompt the user with questions
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your first/last name?",
            name: "Name"
            // console.log(response.Name)

        },
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


    .catch(function (error) {
        console.log('error', error);

 
    });


