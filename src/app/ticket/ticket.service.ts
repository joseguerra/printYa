import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Ticket} from './ticket';

import {Rutas} from '../../app/rute';

import 'rxjs/add/operator/map';



@Injectable()
export class TicketService {  
  url : string; 
  constructor(
    private http: Http,
    public rutas: Rutas
  ) { }

  getTickets(page,limit){   
    this.url = this.rutas.ticket(page,limit);      
    var response = this.http.get(this.url).map(res => res.json());    
    return response;
  }

  ticketCount(){
    this.url = this.rutas.ticketCount();         
    var response = this.http.get(this.url).map(res => res.json());    
    return response;
  }

  getTicket(id: number){   
    this.url = this.rutas.ticket('',0);     
    var response = this.http.get(this.url+id).map(res => res.json());    
    return response;
  }

  addTicket(ticket: Ticket){        
    this.url = this.rutas.ticket('',0);     
    var response = this.http.post(this.url,ticket).map(res => res.json());    
    return response;
  }

  putTicket(ticket: Ticket){        
    this.url = this.rutas.ticket('',0);     
    var response = this.http.put(this.url+ticket.id,ticket).map(res => res.json());    
    return response;
  }

  deleteTicket(id: number){      
    this.url = this.rutas.ticket('',0);     
    var response = this.http.delete(this.url+id).map(res => res.json());    
    return response;
  }

}
