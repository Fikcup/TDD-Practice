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
    });
})