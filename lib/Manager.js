// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(officeNumber) {
        super(officeNumber);
        this.officeNumber = officeNumber;
      }
    
    getRole() {
    return "Manager";
    }

}
const manager = new Manager(9);
manager.printInfo();