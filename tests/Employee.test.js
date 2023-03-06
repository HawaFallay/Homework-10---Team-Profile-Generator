//dependencies
const Employee = require('../lib/employee');

//initialize testing

describe("Employee", () =>{
    descibe("Employee information", () => {
        it("should return a string value", () => {
            const strName = "Ronnie";

            const employee = new Employee(strName);
            expect(employee.name).toBe(strName);
        });
         
        it("shouldshould return a string value", () => {
            const strID = "11";

            const employee = new Employee("Ronnie", strId);
            expect(employee.id).toBe(strId);
        });

        it("should return a string value", () => {
            const strEmail = "Ronnie11@gmail.com";

            const employee = new Employee("Ronnie", "11", strEmail);
            expect(employee.email).toBe(strEmail);
        });
    });
    
    descibe("employee class methods", () => {
        it ("should return a string value", () => {
            const employee = new Employee("Ronnie", "11", "Ronnie11@gmail.com");
            expect(employee.getName()).toBe("Ronnie");
        });

        it ("should return a string value", () => {
            const employee = new Employee("Ronnie", "11", "Ronnie@gmail.com");
            expect(employee.getId()).toBe("11");
        });

        it("should return a string value", () => {
            const employee = new Employee("Ronnie", "11", "Ronnie11@gmail.com");
            expect(employee.getEmail()).toBe("Ronnie11@gmail.com");
        });

        it("should return a string value", () => {
            const employee = new Employee("Ronnie","11", "Ronnie11@gmail.com");
            expect(employee.getRole()).toBe("Employee");
        });
    });
});