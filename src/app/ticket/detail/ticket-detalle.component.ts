import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TicketService} from '../ticket.service';
import {Ticket} from '../ticket';
import {FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'ticket-detalle',
  templateUrl: './ticket-detalle.component.html'
})
export class TicketDetalleComponent implements OnInit {
  ticket: any;  
  titulo ="";
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private ticketService: TicketService,
      private formBuilder: FormBuilder
  ) {     
  }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];

        this.titulo = "Detalle de ticket";
        this.ticketService.getTicket(id).subscribe(
          rs =>{
            console.log(rs);
            this.ticket = rs            
          } ,
          er => console.log(er),          
        )
      

  }


  goLista(){
    let link = ['/ticket'];
    this.router.navigate(link); 
  }


}
