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
var core_1 = require("@angular/core");
var mainService_component_1 = require("../../Service/mainService.component");
var CigaretteDialogComponent = (function () {
    function CigaretteDialogComponent(mainService) {
        this.mainService = mainService;
        this.onMinusQuantity = new core_1.EventEmitter();
        this.onPlusQuantity = new core_1.EventEmitter();
    }
    CigaretteDialogComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    CigaretteDialogComponent.prototype.getOrders = function () {
        this.orders = this.mainService.getOrders();
        return this.orders;
    };
    CigaretteDialogComponent.prototype.minusQuantity = function (item, order) {
        this.onMinusQuantity.emit(item);
        item.quantity -= 1;
        item.amount = item.quantity * item.price;
        this.setTotalPrice(order);
    };
    CigaretteDialogComponent.prototype.plusQuantity = function (item, order) {
        this.onPlusQuantity.emit(item);
        item.quantity += 1;
        item.amount = item.quantity * item.price;
        this.setTotalPrice(order);
    };
    CigaretteDialogComponent.prototype.setTotalPrice = function (order) {
        var items = order.items;
        var totalPrice = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            totalPrice += item.amount;
        }
        return order.totalPrice = totalPrice;
    };
    ;
    return CigaretteDialogComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CigaretteDialogComponent.prototype, "onMinusQuantity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CigaretteDialogComponent.prototype, "onPlusQuantity", void 0);
CigaretteDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cigarette-dialog',
        templateUrl: '../CigaretteDialog/cigaretteDialog.component.html',
        styleUrls: ['cigaretteDialog.component.css']
    }),
    __metadata("design:paramtypes", [mainService_component_1.MainServiceComponent])
], CigaretteDialogComponent);
exports.CigaretteDialogComponent = CigaretteDialogComponent;
//# sourceMappingURL=cigaretteDialog.component.js.map