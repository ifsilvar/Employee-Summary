// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(gitHub) {
        super(gitHub);
        this.gitHub = gitHub;
      }
    
    getGithub(git){
        this.gitHub = git;
        console.log(`youre github account is ${git}`)
    }

    getRole() {
    return Engineer;
    }

}
