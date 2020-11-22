// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');


class Intern {
    constructor(school) {
        super(school);
        this.school = school;
      }

    getSchool(){
        console.log(`Youre school is ${school}`)
    };

    getRole(){
        return Intern;
    };
}