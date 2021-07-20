// import Employee class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, ID, email, office) {
        super(name, ID, email);

        this.officeNumber = office;
    }

    getOfficeNumber() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;