const Coffee = require('../src/Coffee');

describe("Coffee", () => {
    describe("Initialization", () => {
        it("should create an object and set valid arguments", () => {
            const coffee = new Coffee("Black", 1);
            
            expect(coffee.name).toBe("Black");
            expect(coffee.quantity).toBe(1);
        })
    });
});