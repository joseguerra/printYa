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
var lotery_service_1 = require("./lotery.service");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var dialog_component_1 = require("../dialog/dialog.component");
var snackBar_component_1 = require("../snackBar/snackBar.component");
var LoteryComponent = (function () {
    function LoteryComponent(loteryService, dialog, snackBar, router) {
        this.loteryService = loteryService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
    }
    LoteryComponent.prototype.ngOnInit = function () {
        this.get();
    };
    LoteryComponent.prototype.get = function () {
        var _this = this;
        this.loteryService.getLoteries().subscribe(function (data) {
            _this.lista = data;
            console.log(data);
        }, function (err) {
        });
    };
    LoteryComponent.prototype.crear = function () {
        var link = ['/detalleLotery'];
        this.router.navigate(link);
    };
    LoteryComponent.prototype.editar = function (item) {
        console.log(item);
        var link = ['/detalleLotery/', item.id];
        this.router.navigate(link);
    };
    LoteryComponent.prototype.borrar = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(dialog_component_1.DialogResultExampleDialog, {
            data: id,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.loteryService.deleteLotery(id).subscribe(function (data) {
                    _this.snackBar.openFromComponent(snackBar_component_1.snackBarComponent, {
                        duration: 2000,
                    });
                    _this.get();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    return LoteryComponent;
}());
LoteryComponent = __decorate([
    core_1.Component({
        selector: 'app-lotery',
        templateUrl: './lotery.component.html',
        styleUrls: ['./lotery.component.css']
    }),
    __metadata("design:paramtypes", [lotery_service_1.LoteryService,
        material_1.MdDialog,
        material_1.MdSnackBar,
        router_1.Router])
], LoteryComponent);
exports.LoteryComponent = LoteryComponent;
//# sourceMappingURL=lotery.component.js.map