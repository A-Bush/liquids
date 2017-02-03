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
        this.setTotalPrice(item.price);
    };
    ;
    Order.prototype.setTotalPrice = function (price) {
        if (price === void 0) { price = 0; }
        this.totalPrice += price;
    };
    ;
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map