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
var ticket_service_1 = require("./ticket.service");
var router_1 = require("@angular/router");
var TicketComponent = (function () {
    function TicketComponent(ticketService, router) {
        this.ticketService = ticketService;
        this.router = router;
    }
    TicketComponent.prototype.ngOnInit = function () {
        this.get();
    };
    TicketComponent.prototype.get = function () {
        var _this = this;
        this.ticketService.getTickets().subscribe(function (data) {
            _this.lista = data;
            console.log(data);
        }, function (err) {
        });
    };
    TicketComponent.prototype.detalle = function (item) {
        console.log(item);
        var link = ['/ticketDetalle/', item.id];
        this.router.navigate(link);
    };
    return TicketComponent;
}());
TicketComponent = __decorate([
    core_1.Component({
        selector: 'app-ticket',
        templateUrl: './ticket.component.html',
        styleUrls: ['./ticket.component.css']
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        router_1.Router])
], TicketComponent);
exports.TicketComponent = TicketComponent;
//# sourceMappingURL=ticket.component.js.map