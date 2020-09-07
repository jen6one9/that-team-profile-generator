const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRender");
var employeeDirectory = []

// const util = require('util');

// Prompt the user with questions


      
function displayMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "what would you like to do?",
            name: "userInput",
            choices: ["manager", "intern", "engineer", "exit application"]

        }
    ])
        .then(function (response) {
            switch (response.userInput) {
                case "manager":
                    addmanager()
                    break;
                case "intern":
                    addintern()
                    break;
                case "engineer":
                    addengineer()
                    break;
                default:
                    exitapp()
            }
        }    )
    }


    function addmanager(){
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "Name"
                // console.log(response.Name)
    
            },
            {
                type: "input",
                message: "What is your ID?",
                name: "ID"
                // console.log(response.ID)
    
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "Email"
                // console.log(response.Email)
    
        
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "OfficeNumber"
                // console.log(response.officeNumber)
    
            }
        ])

    .then(function (response) {
        var newManager = new Manager(response.Name, response.ID,response.Email,response.OfficeNumber)
        employeeDirectory.push(newManager)
        displayMenu()
    })
}


displayMenu()
//         console.log(response);
//         var READMEdata = `
// # ${response.Title}


//     .catch(function (error) {
//         console.log('error', error)