class Coffee {
    constructor(name, quantity) {
        console.log(typeof name);
        if (typeof name !== "string") {
            throw new Error("Expected parameter 'name' to be of type String");
        }

        this.name = name;
        this.quantity = quantity;
    }
}

module.exports = Coffee;