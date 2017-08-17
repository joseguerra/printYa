import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user';
import {FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'user-detalle',
  templateUrl: './user-detalle.component.html'
})
export class UserDetalleComponent implements OnInit {
  form: FormGroup;
  user: any;
  edicion = false;
  titulo ="";
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private formBuilder: FormBuilder
  ) {     
  }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];
      console.log("llegue: ",id);
      if(!id){
        this.crearControlesNuevo();
        this.titulo = "Agregar un nuevo usuario";
        this.form.patchValue({    
          id: "",      
          name:  "",
          email:  "",
          user_name:  "",
          address:  "",
          telephone:  "",
          rol_id: "59444b0ce6882509ecf96baf",
          password: "",                    
          status: 1,               
        })
      }
      else{
        this.crearControlesEditar();
        this.titulo = "Edicion del usuario";
        this.userService.getUser(id).subscribe(
          rs =>{
            this.user = rs
            this.edicion = true;
            this.form.patchValue({
              id: this.user.id,
              name:  this.user.name,
              email:  this.user.email,
              user_name:  this.user.user_name,
              address:  this.user.address,
              telephone:  this.user.telephone,
              rol_id: this.user.rol_id,
              password: this.user.password,                            
              status:this.user.status,               
            })
          } ,
          er => console.log(er),          
        )
      } 

  }

  crearControlesNuevo(){
    this.form = this.formBuilder.group({                
      name: ['',Validators.required],
      email: ['',Validators.required],
      user_name: ['',Validators.required],
      address: ['',Validators.required],
      telephone: ['',Validators.required],      
      password: ['',Validators.required],            
      status: ['',Validators.required],  
      rol_id: ['',Validators.required],  
    })
  } 

  crearControlesEditar(){
    this.form = this.formBuilder.group({   
      id: ['',Validators.required] ,     
      name: ['',Validators.required] ,            
      email: ['',Validators.required],
      user_name: ['',Validators.required],
      address: ['',Validators.required],
      telephone: ['',Validators.required],
      password: ['',Validators.required],            
      status: ['',Validators.required],   
      rol_id:['',Validators.required],   
    })
  } 

  guardarInventario(){
    if(this.edicion){
      this.updateInventario(this.form.value);
    }else{
      this.agregarInventario(this.form.value);
    }    
  }

  agregarInventario(user: User){   
    console.log(user); 
    this.userService.addUser(user).subscribe(
      rt => {
        this.goLista()
      },
      er => console.log(er),
      () =>   console.log("terminado")
    );
  }

  updateInventario(user: User){     
    if(!user) return;
    this.userService.putUser(user)
      .subscribe(
        rt =>{
          this.goLista()
          console.log(rt);
          
        },
        er => console.log(er)        
      )
  }

  goLista(){
    let link = ['/user'];
    this.router.navigate(link); 
  }

  limpiarFormulario(){
    this.form.reset();
  }


}
