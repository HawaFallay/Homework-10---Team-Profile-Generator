// dependencies
const Employee = require('./employee');

//initailize testing

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = this.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
    return "Engineer";
    }
}
module.exports = Engineer;