"use strict";
var Cigarette = (function () {
    function Cigarette(name, description, price, amount) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.amount = amount;
        this.onCart = false;
    }
    return Cigarette;
}());
exports.Cigarette = Cigarette;
//# sourceMappingURL=cigarettes.js.map