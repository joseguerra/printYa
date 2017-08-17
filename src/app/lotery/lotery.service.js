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
var http_1 = require("@angular/http");
var rute_1 = require("../../app/rute");
require("rxjs/add/operator/map");
var LoteryService = (function () {
    function LoteryService(http, rutas) {
        this.http = http;
        this.rutas = rutas;
        this.url = this.rutas.lotery();
    }
    LoteryService.prototype.getLoteries = function () {
        var response = this.http.get(this.url).map(function (res) { return res.json(); });
        return response;
    };
    LoteryService.prototype.getLotery = function (id) {
        var response = this.http.get(this.url + id).map(function (res) { return res.json(); });
        return response;
    };
    LoteryService.prototype.addLotery = function (lotery) {
        var response = this.http.post(this.url, lotery).map(function (res) { return res.json(); });
        return response;
    };
    LoteryService.prototype.putLotery = function (lotery) {
        Number(lotery.isuue_time);
        console.log(lotery);
        var response = this.http.put(this.url + lotery.id, lotery).map(function (res) { return res.json(); });
        return response;
    };
    LoteryService.prototype.deleteLotery = function (id) {
        var response = this.http.delete(this.url + id).map(function (res) { return res.json(); });
        return response;
    };
    return LoteryService;
}());
LoteryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        rute_1.Rutas])
], LoteryService);
exports.LoteryService = LoteryService;
//# sourceMappingURL=lotery.service.js.map