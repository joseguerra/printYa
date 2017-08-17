import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {MdDialog, MdDialogRef,MdSnackBar,Sort,PageEvent} from '@angular/material';
import {DialogResultExampleDialog} from '../dialog/dialog.component';
import {snackBarComponent} from '../snackBar/snackBar.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  sortedData:any;
  lista: any;

  length:number =0;
  pageSize = 5;  
  pagina: number = 0;   
  pageEvent: PageEvent;
  constructor(private userService:UserService,
              private dialog: MdDialog,
              private snackBar: MdSnackBar,
              private router: Router,) { 
                
              }
  
  ngOnInit() {
    this.get('',this.pageSize);
    this.longitud();
  }

  newPage(event){        
    this.pageEvent = event;    
    this.get(this.pageEvent.pageIndex+1,this.pageSize);      
    

  }

  get(page,limit){
    this.userService.getUsers(page,limit).subscribe(data=>{
      this.lista = data;      
      
    },err=>{

    })
  }

  longitud(){
    this.userService.userCount().subscribe(data=>{              
      this.length = data;  
    },err=>{

    })  
  }

  crear(){      
      let link = ['/userDetalle'];
      this.router.navigate(link);
  }

  editar(item: User){    
      let link = ['/userDetalle/',item.id];
      this.router.navigate(link);
  }

  borrar(id: number){
     let dialogRef = this.dialog.open(DialogResultExampleDialog, {
      data: id,
    });    

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.userService.deleteUser(id).subscribe(data=>{
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

  sortData(sort: Sort) {
    console.log(this.lista);
    const data = this.lista.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a:any, b:any) => {
      
      let isAsc = sort.direction == 'asc';
      console.log(isAsc);
      
      switch (sort.active) {        
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'email': return this.compare(a.email, b.email, isAsc);              
        default: return 0;
      }
    });
  }

  compare(a:any, b:any, isAsc:any) {
    console.log((a < b ? -1 : 1) * (isAsc ? 1 : -1))
      console.log(b)
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
