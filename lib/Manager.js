const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officNumber) {
        super(name, id, email);
        this.officNumber = officNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;