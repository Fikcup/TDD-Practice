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
        it("should throw an error if age isn't of type number", () => {
            const coffee = () => new Coffee("Black", "1");
            const err = new Error("Expected parameter 'quantity' to be of type number");

            expect(coffee).toThrowError(err);
        });
        it("should throw an error if provided no arguments", () => {
            const coffee = () => new Coffee();

            expect(coffee).toThrow();
        });
        it("should throw an error if quantity is not provided", () => {
            const coffee = () => new Coffee("Black");
            const err = new Error("Expected parameter 'quantity' to be of type number");

            expect(coffee).toThrowError(err);
        });
        it("should not allow a quantity less than one", () => {
            const coffee = () => new Coffee("Black", -3);
            const err = new Error("Quantity must be equal to or greater than one.");

            expect(coffee).toThrowError(err);
        });
        it("should have a price equal to quantity times 4.50", () => {
            const coffee = new Coffee("Black", 4);
            const cost = 4 * 4.50;

            expect(coffee.price).toBe(cost);
        })
    });

    describe("Modify quantity", () => {
        describe("quantity should be modified", () => {
            const coffee = new Coffee("Black", 1);
            coffee.changeQuantity(4);

            expect(coffee.quantity).toBe(4);
        });
    });
});