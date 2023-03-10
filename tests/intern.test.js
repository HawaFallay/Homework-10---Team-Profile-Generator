const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Intern info", () => {
        it("should return a string value", () => {
            const strName = "Tim";

            const intern = new Intern(strName);
            expect(intern.name).toBe(strName);
        });

        it("should return a string value", () => {
            const strId = "I143";

            const intern = new Intern("Tim", strId);
            expect(intern.id).toBe(strId);
        });

            it("should return a string value", () => {
                const strEmail = "Tim143@gmail.com";
                
                const intern = new Intern("Tim", "I143", strEmail);
                expect(intern.email).toBe(strEmail);
            });

                it("should return a string value", () => {
                    const strSchool = "UC Berkeley";

                    const intern = new Intern("Tim", "I143", "Tim143@gmail.com", strSchool);
                    expect(intern.school).toBe(strSchool);
                });
            });
            describe("manager class methods", () => {
                it("should return the intern's school name", () => {
                    const intern = new Intern("Tim", "I143", "Tim143@gmail.com", "UC Berkeley");
                    expect(intern.getSchool()).toBe("UC Berkeley");
                });

                it("should return employee's role", () => {
                    const intern = new Intern("Tim", "I143", "Tim143@gmail.com", "UC Berkeley");
                    expect(intern.getRole()).toBe("Intern");
                });
            });
        
        });