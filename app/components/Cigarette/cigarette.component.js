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
var cigarettes_1 = require("../../Model/cigarettes");
var material_1 = require("@angular/material");
var cigaretteDialog_component_1 = require("../CigaretteDialog/cigaretteDialog.component");
var CigaretteComponent = (function () {
    function CigaretteComponent(dialog) {
        this.dialog = dialog;
        this.onOrdered = new core_1.EventEmitter();
    }
    CigaretteComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(cigaretteDialog_component_1.CigaretteDialogComponent);
    };
    CigaretteComponent.prototype.order = function () {
        this.onOrdered.emit(this.cigarette);
        this.cigarette.onCart = true;
        var checked = document.getElementsByClassName("md-ripple-active");
        for (var i = 0; i < checked.length; ++i) {
            var check = checked[i].parentElement.parentElement;
            check.setAttribute('disabled', 'true');
            var goToCart = check.parentElement.getElementsByClassName('go-to-cart');
            for (var i_1 = 0; i_1 < goToCart.length; ++i_1) {
                goToCart[i_1].style.visibility = 'visible';
            }
        }
    };
    return CigaretteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cigarettes_1.Cigarette)
], CigaretteComponent.prototype, "cigarette", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CigaretteComponent.prototype, "onOrdered", void 0);
CigaretteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cigarette-app',
        templateUrl: 'cigarette.component.html',
        styleUrls: ['cigarette.component.css']
    }),
    __metadata("design:paramtypes", [material_1.MdDialog])
], CigaretteComponent);
exports.CigaretteComponent = CigaretteComponent;
//# sourceMappingURL=cigarette.component.js.map