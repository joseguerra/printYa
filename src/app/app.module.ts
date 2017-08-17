import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';

/*Components*/
import {UserComponent} from './user/user.component';
import {UserDetalleComponent} from './user/detail/user-detalle.component';
import {LoteryComponent} from './lotery/lotery.component';
import {LoteryDetalleComponent} from './lotery/detail/lotery-detalle.component';
import {TicketComponent} from './ticket/ticket.component';
import {TicketDetalleComponent} from './ticket/detail/ticket-detalle.component';

import {DialogResultExampleDialog} from './dialog/dialog.component';
import {snackBarComponent} from './snackBar/snackBar.component';

/*providers*/
import {UserService} from './user/user.service';
import {TicketService} from './ticket/ticket.service';
import {LoteryService} from './lotery/lotery.service';
import {Rutas} from './rute';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetalleComponent,
    LoteryComponent,
    LoteryDetalleComponent,
    TicketComponent,
    TicketDetalleComponent,
    DialogResultExampleDialog,
    snackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    TicketService,
    LoteryService,
    Rutas
  ],
  entryComponents: [    
    snackBarComponent,
    DialogResultExampleDialog        
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
