const Coffee = require("./Coffee");

class Espresso extends Coffee {
    constructor(name, quantity) {
        const cost = 1.50;

        super(name, quantity);
        this.price = cost * this.quantity;
    }
}

module.exports = Espresso;