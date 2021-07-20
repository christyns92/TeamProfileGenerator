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
        .prompt([{
                type: 'input',
                message: "Please enter the Manager's name: ",
                name: 'name'
            },

            {
                type: 'input',
                message: "Please enter the Manager's ID number: ",
                name: 'employee'
            },

            {
                type: 'input',
                message: "Please enter the Manager's email address: ",
                name: 'email'
            },

            {
                type: 'input',
                message: "Please enter the Manager's office number: ",
                name: 'office'
            },
        ])
        .then((response) => {
            let name = response.name;
            let ID = response.employee;
            let email = response.email;
            let office = response.office;

            let manager = new Manager(name, ID, email, office);
            allEmployees.push(manager);
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt([{
                type: 'list',
                message: 'Is this employee an Engineer or an Intern?',
                name: 'role',
                choices: ['Engineer', 'Intern']
            },

            {
                type: 'input',
                message: "Please enter the Employee's name: ",
                name: 'name'
            },

            {
                type: 'input',
                message: "Please enter the Employee's ID number: ",
                name: 'employee'
            },

            {
                type: 'input',
                message: "Please enter the Employee's email address: ",
                name: 'email'
            },

            {
                type: 'input',
                message: "Please enter the Employee's github username: ",
                when: (list) => list.role == "Engineer",
                name: "github"
            },
            {
                type: 'input',
                message: "Please enter the Employee's school: ",
                when: (list) => list.role == "Intern",
                name: "school"
            },

            {
                type: 'confirm',
                message: "Will you be adding another Employee?",
                name: "add"
            }
        ])
        .then((response) => {
            let name = response.name;
            let ID = response.employee;
            let email = response.email;

            if (response.role == "Intern") {
                let school = response.school;
                let intern = new Intern(name, ID, email, school);
                allEmployees.push(intern);
            } else if (response.role == "Engineer") {
                let github = response.github;
                let engineer = new Engineer(name, ID, email, github);
                allEmployees.push(engineer);
            }

            if (response.add == true) { newEmployee(); } else { createHTML(); }
        })
}

const createHTML = () => {
    fs.writeFile("test.html", generateHtml(allEmployees), (err) => {
        err ? console.log("Error: The program is not working!") : console.log("An HTML has been created for you!")
    })
}

newManager();