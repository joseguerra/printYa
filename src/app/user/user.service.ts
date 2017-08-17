import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import {Rutas} from '../../app/rute';

import 'rxjs/add/operator/map';



@Injectable()
export class UserService {  
  url : string; 
  constructor(
    private http: Http,
    public rutas: Rutas
  ) { }

  getUsers(page,limit){      
    this.url = this.rutas.user(page,limit);   
    var response = this.http.get(this.url).map(res => res.json());    
    return response;
  }

  userCount(){
    this.url = this.rutas.userCount();         
    var response = this.http.get(this.url).map(res => res.json());    
    return response;
  }

  getUser(id: number){   
    this.url = this.rutas.user('',0);     
    var response = this.http.get(this.url+id).map(res => res.json());    
    return response;
  }

  addUser(user: User){     
    this.url = this.rutas.user('',0);     
    Number(user.status);   
    var response = this.http.post(this.url,user).map(res => res.json());    
    return response;
  }

  putUser(user: User){   
    this.url = this.rutas.user('',0);     
    Number(user.status);      
    var response = this.http.put(this.url+user.id,user).map(res => res.json());    
    return response;
  }

  deleteUser(id: number){   
    this.url = this.rutas.user('',0);        
    var response = this.http.delete(this.url+id).map(res => res.json());    
    return response;
  }

}
