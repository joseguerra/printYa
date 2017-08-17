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
var ticket_service_1 = require("../ticket.service");
var forms_1 = require("@angular/forms");
var TicketDetalleComponent = (function () {
    function TicketDetalleComponent(route, router, ticketService, formBuilder) {
        this.route = route;
        this.router = router;
        this.ticketService = ticketService;
        this.formBuilder = formBuilder;
        this.titulo = "";
    }
    TicketDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.titulo = "Detalle de ticket";
        this.ticketService.getTicket(id).subscribe(function (rs) {
            console.log(rs);
            _this.ticket = rs;
        }, function (er) { return console.log(er); });
    };
    TicketDetalleComponent.prototype.goLista = function () {
        var link = ['/ticket'];
        this.router.navigate(link);
    };
    return TicketDetalleComponent;
}());
TicketDetalleComponent = __decorate([
    core_1.Component({
        selector: 'ticket-detalle',
        templateUrl: './ticket-detalle.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        ticket_service_1.TicketService,
        forms_1.FormBuilder])
], TicketDetalleComponent);
exports.TicketDetalleComponent = TicketDetalleComponent;
//# sourceMappingURL=ticket-detalle.component.js.map