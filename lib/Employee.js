// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name){
        this.name = name;
        console.log(`Youre name is ${name}`)
    }

    getId(number){
        this.id = number;
        console.log(`Youre id number is ${number}`)
    }

    getEmail(email){
        this.email = email;
        console.log(`Youre email is ${email}` )
    }

    getRole(){
        return Employee;
    }
}

module.exports = Employee;