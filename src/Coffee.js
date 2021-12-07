class Coffee {
    constructor(name, quantity) {
        console.log(typeof name);
        if (typeof name !== "string") {
            throw new Error("Expected parameter 'name' to be of type String");
        }

        if (typeof quantity !== "number") {
            throw new Error("Expected parameter 'quantity' to be of type number");
        }

        if (quantity < 1) {
            throw new Error ("Quantity must be equal to or greater than one.");
        }

        this.name = name;
        this.quantity = quantity;
    }

    changeQuantity(quantity) {
        this.quantity = quantity;
    }
}

module.exports = Coffee;