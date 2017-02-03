"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var cigarettes_1 = require("../Model/cigarettes");
var order_1 = require("../Model/order");
var MainServiceComponent = (function () {
    function MainServiceComponent(http) {
        this.http = http;
        this.cigaretteUrl = 'app/cigarettes';
        this.haeders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.orders = [];
    }
    MainServiceComponent.prototype.handleError = function (error) {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    };
    MainServiceComponent.prototype.getCigarettes = function () {
        return this.http.get(this.cigaretteUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MainServiceComponent.prototype.addItemToOrder = function (item) {
        if (!this.orders.length) {
            this.addOrder(new order_1.Order());
        }
        this.orders[0].addItem(item);
    };
    ;
    MainServiceComponent.prototype.getOrders = function () {
        return this.orders;
    };
    ;
    MainServiceComponent.prototype.addOrder = function (order) {
        return this.orders.push(order);
    };
    ;
    return MainServiceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cigarettes_1.Cigarette)
], MainServiceComponent.prototype, "selectedCigarette", void 0);
MainServiceComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MainServiceComponent);
exports.MainServiceComponent = MainServiceComponent;
//# sourceMappingURL=mainService.component.js.map