const allEmployees = []

const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHtml = require('./utils/generateHtml');

// take in answers and create a new manager with those answers, push new manager into the employees array, THEN call the what next function. (create new manager, engineer, or intern)

function newManager() {
    inquirer
        .prompt([
            { type: 'input', message: "Please enter the Manager's name", name: 'name' },
            { type: 'input', message: "Please enter the Manager's ID number", name: 'employee' },
            { type: 'input', message: "Please enter the Manager's email address", name: 'email' },
            { type: 'input', message: "Please enter the Manager's office number", name: 'office' },
        ])
        .then((response) => {
            let name = response.name;
            let ID = response.employee;
            let email = response.email;
            let office = response.office;

            let manager = new Manager(name, ID, email, office);
            team.push(manager);
            newEmployee();
        })
}


// ///require classes and inquirer and fs
// //package native to node for resolving path
// const path = require("path");
// //determine current directory and find path to the output folder 
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// //where to create our output
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// //require render function from the page template
// const render = require("./src/page-template.js");
// //use inquirer to determine what kind of employee you will be adding or to exit and build html
// //based on the response trigger another inquire block
// // use answers to create a "new Employee" and add the employee to the 
// //teamMembers array
// //
//   function buildTeam() {
//     // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//       fs.mkdirSync(OUTPUT_DIR)
//     }
//     //write html to output/team.html using function exported from page-template.js
//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
//   }