"use strict";
var Ticket = (function () {
    function Ticket(id, producto, existencia, precio, proveedor) {
        this.id = id;
        this.producto = producto;
        this.existencia = existencia;
        this.precio = precio;
        this.proveedor = proveedor;
    }
    return Ticket;
}());
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.js.map