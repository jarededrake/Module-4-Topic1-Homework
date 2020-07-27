class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(userName, salary, position, department) {
        if(userName === '' || userName === undefined || userName === null) {
            throw "Invalid input! 1";
        }
        if(salary === '' || salary === undefined || salary === null || salary < 0) {
            throw "Invalid input! 2";
        }
        if(position === '' || position === undefined || position === null) {
            throw "Invalid input! 3";
        }
        if(department === '' || department === undefined || department === null) {
            throw "Invalid input! 4";
        }
        else {
            this.departments.push(`New employee is hired. Name: ${userName}. Position: ${position}`);
        }
        // return this.departments;
    }
    bestDepartment() {
        
    }

}

let c = new Company(); 
c.addEmployee("Stanimir", 2000, "engineer", "Construction"); 
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"); 
c.addEmployee("Slavi", 500, "dyer", "Construction"); 
c.addEmployee("Stan", 2000, "architect", "Construction"); 
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"); 
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"); 
c.addEmployee("Gosho", 1350, "HR", "Human resources"); 
console.log(c.bestDepartment()); 
