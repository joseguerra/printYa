import { Component, OnInit } from '@angular/core';
import {LoteryService} from './lotery.service';
import {Lotery} from './lotery';
import {Router} from '@angular/router';
import {MdDialog, MdDialogRef,MdSnackBar,PageEvent} from '@angular/material';
import {DialogResultExampleDialog} from '../dialog/dialog.component';
import {snackBarComponent} from '../snackBar/snackBar.component';
@Component({  
  selector: 'app-lotery',
  templateUrl: './lotery.component.html',
  styleUrls: ['./lotery.component.css']
})
export class LoteryComponent implements OnInit {
  lista: any;  
  length:number =0;
  pageSize = 5;  
  pagina: number = 0;   

  // MdPaginator Output
  pageEvent: PageEvent;
  constructor(private loteryService:LoteryService,
              private dialog: MdDialog,
              private snackBar: MdSnackBar,
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
    this.loteryService.getLoteries(page,limit).subscribe(data=>{
      this.lista = data;      
    },err=>{

    })
  }

  longitud(){
    this.loteryService.loteryCount().subscribe(data=>{              
      this.length = data;  
    },err=>{

    })  
  }

  crear(){      
      let link = ['/detalleLotery'];
      this.router.navigate(link);
  }

  editar(item: Lotery){
    console.log(item);
      let link = ['/detalleLotery/',item.id];
      this.router.navigate(link);
  }

  borrar(id: number){
    let dialogRef = this.dialog.open(DialogResultExampleDialog, {
      data: id,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loteryService.deleteLotery(id).subscribe(data=>{
          this.snackBar.openFromComponent(snackBarComponent, {
            duration: 2000,
          });
          this.longitud();
          this.get('',this.pageSize);
        },err=>{
          console.log(err)
        })
      }      
    });          
  }

}
