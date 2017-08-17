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
var router_1 = require("@angular/router");
var lotery_service_1 = require("../lotery.service");
var forms_1 = require("@angular/forms");
var LoteryDetalleComponent = (function () {
    function LoteryDetalleComponent(route, router, loteryService, formBuilder) {
        this.route = route;
        this.router = router;
        this.loteryService = loteryService;
        this.formBuilder = formBuilder;
        this.edicion = false;
        this.titulo = "";
    }
    LoteryDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log("llegue: ", id);
        if (!id) {
            this.crearControlesNuevo();
            this.titulo = "Agregar un nuevo registro";
        }
        else {
            this.crearControlesEditar();
            this.titulo = "Edicion del registro";
            this.loteryService.getLotery(id).subscribe(function (rs) {
                _this.lotery = rs;
                _this.edicion = true;
                _this.form.patchValue({
                    id: _this.lotery.id,
                    name: _this.lotery.name,
                    emission_time: _this.lotery.emission_time
                });
            }, function (er) { return console.log(er); });
        }
    };
    LoteryDetalleComponent.prototype.crearControlesNuevo = function () {
        this.form = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            emission_time: ['', forms_1.Validators.required],
        });
    };
    LoteryDetalleComponent.prototype.crearControlesEditar = function () {
        this.form = this.formBuilder.group({
            id: ['', forms_1.Validators.required],
            name: ['', forms_1.Validators.required],
            emission_time: ['', forms_1.Validators.required],
        });
    };
    LoteryDetalleComponent.prototype.guardarInventario = function () {
        if (this.edicion) {
            this.updateInventario(this.form.value);
        }
        else {
            this.agregarInventario(this.form.value);
        }
    };
    LoteryDetalleComponent.prototype.agregarInventario = function (lotery) {
        var _this = this;
        this.loteryService.addLotery(lotery).subscribe(function (rt) {
            _this.goLista();
        }, function (er) { return console.log(er); }, function () { return console.log("terminado"); });
    };
    LoteryDetalleComponent.prototype.updateInventario = function (lotery) {
        if (!lotery)
            return;
        this.loteryService.putLotery(lotery)
            .subscribe(function (rt) {
            console.log(rt);
        }, function (er) { return console.log(er); });
    };
    LoteryDetalleComponent.prototype.goLista = function () {
        var link = ['/lotery'];
        this.router.navigate(link);
    };
    LoteryDetalleComponent.prototype.limpiarFormulario = function () {
        this.form.reset();
    };
    return LoteryDetalleComponent;
}());
LoteryDetalleComponent = __decorate([
    core_1.Component({
        selector: 'lotery-detalle',
        templateUrl: './lotery-detalle.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        lotery_service_1.LoteryService,
        forms_1.FormBuilder])
], LoteryDetalleComponent);
exports.LoteryDetalleComponent = LoteryDetalleComponent;
//# sourceMappingURL=lotery-detalle.component.js.map