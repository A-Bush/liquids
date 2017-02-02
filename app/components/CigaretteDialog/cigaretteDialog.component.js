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
var CigaretteDialogComponent = (function () {
    function CigaretteDialogComponent() {
    }
    return CigaretteDialogComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cigarettes_1.Cigarette)
], CigaretteDialogComponent.prototype, "cigarette", void 0);
CigaretteDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cigarette-dialog',
        templateUrl: '../CigaretteDialog/cigaretteDialog.component.html',
        styleUrls: ['cigaretteDialog.component.css']
    })
], CigaretteDialogComponent);
exports.CigaretteDialogComponent = CigaretteDialogComponent;
//# sourceMappingURL=cigaretteDialog.component.js.map