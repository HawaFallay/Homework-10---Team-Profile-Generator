const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("manager info", () => {
        it("should return a string value", () => {
            const strName = "Mary";

            const manager = new Manager(strName);

            expect(manager.name).toBe(strName);
        });

        it("should return a string value", () => {
            const strId = "911";

            const manager = new Manager("Mary", strId);
            expect(manager.id).toBe(strId);

        });

        it("should return a string value", () => {
            const strEmail = "Mary911@gmail.com";

            const manager = new Manager("Mary", "911", strEmail);
            expect(manager.email).toBe(strEmail);
        });

        it("should return a number value", () => {
            const officeNumber = 19;

            const manager = new Manager("Mary", "911", "Mary911@gmail.com", officeNumber);
            expect(manager.officeNumber).toEqual(19);
        });
    });
    describe("manager class methods", () => {
        it("should return manager's office number", () => {
            const manager = new Manager("Mary", "911", "Mary911@gmail.com", 19);

            expect(manager.getOfficeNumber()).toEqual(12);
        });

        it("should return employee's role", () => {
            const manager = new Manager("Mary", "911", "Mary911@gmail.com", 19);

            expect(manager.getRole()).toBe('Manager');
        });
    });
});