import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LoteryService} from '../lotery.service';
import {Lotery} from '../lotery';
import {FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'lotery-detalle',
  templateUrl: './lotery-detalle.component.html'
})
export class LoteryDetalleComponent implements OnInit {
  form: FormGroup;
  lotery: any;
  edicion = false;
  titulo ="";
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private loteryService: LoteryService,
      private formBuilder: FormBuilder
  ) {     
  }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];
      console.log("llegue: ",id);
      if(!id){
        this.crearControlesNuevo();
        this.titulo = "Agregar un nuevo registro";
      }
      else{
        this.crearControlesEditar();
        this.titulo = "Edicion del registro";
        this.loteryService.getLotery(id).subscribe(
          rs =>{
            this.lotery = rs
            this.edicion = true;
            this.form.patchValue({
              id: this.lotery.id,
              name:  this.lotery.name,
              emission_time:  this.lotery.emission_time
            })
          } ,
          er => console.log(er),          
        )
      } 

  }

  crearControlesNuevo(){
    this.form = this.formBuilder.group({                  
      name: ['',Validators.required],
      emission_time: ['',Validators.required],
    })
  } 

  crearControlesEditar(){
    this.form = this.formBuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required] ,            
      emission_time: ['',Validators.required],
      
    })
  } 

  guardarInventario(){
    if(this.edicion){
      this.updateInventario(this.form.value);
    }else{
      this.agregarInventario(this.form.value);
    }    
  }

  agregarInventario(lotery: Lotery){    
    this.loteryService.addLotery(lotery).subscribe(
      rt => {
        this.goLista()
      },
      er => console.log(er),
      () =>   console.log("terminado")
    );
  }

  updateInventario(lotery: Lotery){     
    if(!lotery) return;
    this.loteryService.putLotery(lotery)
      .subscribe(
        rt =>{          
          this.goLista();
        },
        er => console.log(er)        
      )
  }

  goLista(){
    let link = ['/lotery'];
    this.router.navigate(link); 
  }

  limpiarFormulario(){
    this.form.reset();
  }


}
