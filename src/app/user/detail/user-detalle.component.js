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
var user_service_1 = require("../user.service");
var forms_1 = require("@angular/forms");
var UserDetalleComponent = (function () {
    function UserDetalleComponent(route, router, userService, formBuilder) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.edicion = false;
        this.titulo = "";
    }
    UserDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log("llegue: ", id);
        if (!id) {
            this.crearControlesNuevo();
            this.titulo = "Agregar un nuevo usuario";
            this.form.patchValue({
                id: "",
                name: "",
                email: "",
                user_name: "",
                address: "",
                telephone: "",
                rol_id: "59444b0ce6882509ecf96baf",
                password: "",
                status: 1,
            });
        }
        else {
            this.crearControlesEditar();
            this.titulo = "Edicion del usuario";
            this.userService.getUser(id).subscribe(function (rs) {
                _this.user = rs;
                _this.edicion = true;
                _this.form.patchValue({
                    id: _this.user.id,
                    name: _this.user.name,
                    email: _this.user.email,
                    user_name: _this.user.user_name,
                    address: _this.user.address,
                    telephone: _this.user.telephone,
                    rol_id: _this.user.rol_id,
                    password: _this.user.password,
                    status: _this.user.status,
                });
            }, function (er) { return console.log(er); });
        }
    };
    UserDetalleComponent.prototype.crearControlesNuevo = function () {
        this.form = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            user_name: ['', forms_1.Validators.required],
            address: ['', forms_1.Validators.required],
            telephone: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            status: ['', forms_1.Validators.required],
            rol_id: ['', forms_1.Validators.required],
        });
    };
    UserDetalleComponent.prototype.crearControlesEditar = function () {
        this.form = this.formBuilder.group({
            id: ['', forms_1.Validators.required],
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            user_name: ['', forms_1.Validators.required],
            address: ['', forms_1.Validators.required],
            telephone: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            status: ['', forms_1.Validators.required],
            rol_id: ['', forms_1.Validators.required],
        });
    };
    UserDetalleComponent.prototype.guardarInventario = function () {
        if (this.edicion) {
            this.updateInventario(this.form.value);
        }
        else {
            this.agregarInventario(this.form.value);
        }
    };
    UserDetalleComponent.prototype.agregarInventario = function (user) {
        var _this = this;
        console.log(user);
        this.userService.addUser(user).subscribe(function (rt) {
            _this.goLista();
        }, function (er) { return console.log(er); }, function () { return console.log("terminado"); });
    };
    UserDetalleComponent.prototype.updateInventario = function (user) {
        var _this = this;
        if (!user)
            return;
        this.userService.putUser(user)
            .subscribe(function (rt) {
            _this.goLista();
            console.log(rt);
        }, function (er) { return console.log(er); });
    };
    UserDetalleComponent.prototype.goLista = function () {
        var link = ['/user'];
        this.router.navigate(link);
    };
    UserDetalleComponent.prototype.limpiarFormulario = function () {
        this.form.reset();
    };
    return UserDetalleComponent;
}());
UserDetalleComponent = __decorate([
    core_1.Component({
        selector: 'user-detalle',
        templateUrl: './user-detalle.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService,
        forms_1.FormBuilder])
], UserDetalleComponent);
exports.UserDetalleComponent = UserDetalleComponent;
//# sourceMappingURL=user-detalle.component.js.map