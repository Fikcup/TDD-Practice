const Coffee = require('../src/Coffee');

describe("Coffee", () => {
    describe("Initialization", () => {
        it("should create an object and set valid arguments", () => {
            const coffee = new Coffee("Black", 1);
            
            expect(coffee.name).toBe("Black");
            expect(coffee.quantity).toBe(1);
        });
        it("should throw an error if name isn't of type string", () => {
            const coffee = () => new Coffee(3, 1);
            const err = new Error("Expected parameter 'name' to be of type String");

            expect(coffee).toThrowError(err);
        });
    });
});