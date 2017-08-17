import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserDetalleComponent} from './user/detail/user-detalle.component';
import {TicketComponent} from './ticket/ticket.component';
import {TicketDetalleComponent} from './ticket/detail/ticket-detalle.component';
import {LoteryComponent} from './lotery/lotery.component';
import {LoteryDetalleComponent} from './lotery/detail/lotery-detalle.component';


const appRoutes: Routes = [
    {path: 'home',component: AppComponent},
    {path: 'user',component: UserComponent},
    {path: 'userDetalle',component: UserDetalleComponent},
    {path: 'userDetalle/:id',component: UserDetalleComponent},
    {path: 'ticket',component: TicketComponent},
    {path: 'ticketDetalle/:id',component: TicketDetalleComponent},
    {path: 'lotery',component: LoteryComponent},
    {path: 'detalleLotery/:id',component: LoteryDetalleComponent},
    {path: 'detalleLotery',component: LoteryDetalleComponent},
        
    

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}