//dependencies
const Employee = require('../lib/employee');

//initialize testing

describe("Employee", () =>{
    describe("Initialiation", () => {
        // object should return an empty string
        it("should initiate an obeject", () => {
            const obj = new Employee();
            //'result' should equal object
            expect(typeof(obj)).toEqual("object");
    });
});

//create test for name object 
describe("Name", () => {
    it("should create new name", () => {
        const obj = new Employee("Ronnie");
        expect(obj.name).toEqual("Ronnie");
    });
});
//create test for id object
describe("Id", () => {
    it("should crete new id", () => {
        const obj = new Employee("Ronnie", 11);
        expect(obj.id).toEqual(11)
    });
});

//create test for email object
describe("Email", () => {
    it("should create new email", () => {
        const obj = new Employee("Ronnie", 11, 'Ronnie11@gmail.com');
        expect(obj.id).toEqual('Ronnie11@gmail.com')
        });
    });

//create test for role object
descibe("Role", () => {
    it("should create new role", () => {
        const obj = new Employee ("Ronnie", 11, 'Ronnie11@gmail.com', Employee)
        expect(obj.role).toEqual(Employee)
    });
});
});