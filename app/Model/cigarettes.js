"use strict";
var Cigarette = (function () {
    function Cigarette(name, description, price) {
        this.name = name;
        this.description = description;
        this.quantity = 0;
        this.price = price;
        this.onCart = false;
    }
    return Cigarette;
}());
exports.Cigarette = Cigarette;
//# sourceMappingURL=cigarettes.js.map