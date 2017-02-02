"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var mainService_component_1 = require("./Service/mainService.component");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var cigarettesData_1 = require("./Data/cigarettesData");
var cigaretteList_component_1 = require("./components/CigaretteList/cigaretteList.component");
var cigarette_component_1 = require("./components/Cigarette/cigarette.component");
var material_1 = require("@angular/material");
var cigaretteDialog_component_1 = require("./components/CigaretteDialog/cigaretteDialog.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(cigarettesData_1.CigarettesData),
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            cigaretteList_component_1.CigaretteListComponent,
            cigarette_component_1.CigaretteComponent,
            cigaretteDialog_component_1.CigaretteDialogComponent
        ],
        entryComponents: [cigaretteDialog_component_1.CigaretteDialogComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [mainService_component_1.MainServiceComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map