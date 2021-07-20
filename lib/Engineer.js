// import Employee class
const Employee = require("./Employee");

// create Engineer which extends Employee
class Engineer extends Employee {
    //create a constructor function that takes in name, id, email, github
    constructor(name, ID, email, github) {
        //use super method to pass name, id, email
        super(name, ID, email);
        //and sets them as properties of employee //such as this.github= github
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }

}
module.exports = Engineer;