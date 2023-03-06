const Engineer = require('../lib/engineer');

describe("Engibneer", () => {
    describe("engineer info", () => {
        it("should return a string value", () => {
            const strName = "Michelle";

            const engineer = new Engineer(strName);
            expect(engineer.name).toBe(strName);
        });

        it("should return a string value", () => {
            const strId = "E22";

            const engineer = new Engineer("Michelle", strId);
            expect(engineer.id).toBe(strId);
        });
        
        it("should return a string value", () => {
            const strEmail = "MichlleE22@gmail.com";

            const engineer = new Engineer("Michelle", "E22", strEmail);
            expect(engineer.email).toBe(strEmail);
        });

        it("should return a string value", () => {
            const strGithub = "MichelleE22";

            const engineer = new Engineer("Michelle", "E22", "MichelleE22@gmail", strGithub);
            expect(eengineer.github).toBe(strGithub);
        });
    });
    describe("intern class methods", () => {
        it("should return the engineer'd GitHub username", () => {
            const engineer = new Engineer("Michelle", "E22", "MichelleE22@gmail.com","MichelleE22");
            expect(engineer.getGithub()).toBe("MichelleE22");
        });

        it("should return employee's role", () => {
            const engineer = new Engineer("Michelle", "E22", "MichelleE22@gmail.com","MichelleE22");
            expect(engineer.getRole()).toBe("Engineer");
        });  
    });
});