const Employee = require('./Intern');

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.name = name;
        this.ID = ID
        this.email = email;
        this.school = school
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }

}
module.exports = Intern;