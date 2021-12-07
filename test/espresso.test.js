const Espresso = require('../src/Espresso');
const Coffee = require('../src/Coffee');

describe("Espresso", () => {
    describe("Initialization", () => {
        it("should extend Coffee", () => {
            const isSubclass = new Espresso("blonde", 2);
            let subclass = false;

            if (isSubclass instanceof Coffee) {
                subclass = true;
            }

            expect(subclass).toBe(true);
        });

        it("should override Coffee cost", () => {
            const espresso = new Espresso("blonde", 2);
            const coffee = new Coffee("black", 2);

            let override = false;
            if (espresso.price !== coffee.price) {
                override = true;
            } 

            expect(override).toBe(true);
        })
    });
})