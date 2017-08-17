import { Component, OnInit } from '@angular/core';
import {TicketService} from './ticket.service';
import {Ticket} from './ticket';
import {Router} from '@angular/router';
import {MdDialog, MdDialogRef,MdSnackBar,PageEvent} from '@angular/material';

@Component({  
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  lista: any;
  
  length:number =0;
  pageSize = 5;  
  pagina: number = 0;   
  pageEvent: PageEvent;
  constructor(private ticketService:TicketService,
              private router: Router) { }

  ngOnInit() {
    this.get('',this.pageSize);
    this.longitud();
  }

  newPage(event){        
    this.pageEvent = event;    
    this.get(this.pageEvent.pageIndex+1,this.pageSize);      
    

  }

  get(page,limit){
    this.ticketService.getTickets(page,limit).subscribe(data=>{
      this.lista = data;
      console.log(data);
    },err=>{

    })
  }

  longitud(){
    this.ticketService.ticketCount().subscribe(data=>{              
      this.length = data;  
    },err=>{

    })  
  }

  detalle(item: Ticket){
    console.log(item);
      let link = ['/ticketDetalle/',item.id];
      this.router.navigate(link);
  }

}
