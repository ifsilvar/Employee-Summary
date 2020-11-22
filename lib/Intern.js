// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');


class Intern extends Employee {
    constructor(school) {
        super(school);
        this.school = school;
      }

    getSchool(schoolName){
        this.school = schoolName;
        console.log(`Youre school is ${schoolName}`)
    };

    getRole(){
        return "Intern";
    };
}