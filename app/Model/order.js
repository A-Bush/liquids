"use strict";
var Order = (function () {
    function Order() {
        this.items = [];
        this.totalPrice = 0;
        this.name = '';
        this.surname = '';
        this.address = '';
        this.city = '';
        this.telephone = '';
    }
    Order.prototype.addItem = function (item) {
        this.items.push(item);
        this.setTotalPrice(item.price, item.quantity);
    };
    ;
    Order.prototype.setTotalPrice = function (price, quantity) {
        if (price === void 0) { price = 0; }
        if (quantity === void 0) { quantity = 1; }
        this.totalPrice += (price * quantity);
    };
    ;
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map