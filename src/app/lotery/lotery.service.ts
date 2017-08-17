import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Rutas} from '../../app/rute';
import {Lotery} from './lotery';
import 'rxjs/add/operator/map';



@Injectable()
export class LoteryService {  
  url: string;
  constructor(
    private http: Http,
    public rutas: Rutas
  ) { }

  getLoteries(page,limit){
    this.url = this.rutas.lotery(page,limit);         
    var response = this.http.get(this.url).map(res => res.json());    
    return response;
  }

  loteryCount(){
    this.url = this.rutas.loteryCount();         
    var response = this.http.get(this.url).map(res => res.json());    
    return response;
  }

  getLotery(id: number){        
    this.url = this.rutas.lotery('',0);
    var response = this.http.get(this.url+id).map(res => res.json());    
    return response;
  }

  addLotery(lotery: Lotery){        
    this.url = this.rutas.lotery('',0);
    var response = this.http.post(this.url,lotery).map(res => res.json());    
    return response;
  }

  putLotery(lotery: Lotery){  
    this.url = this.rutas.lotery('',0);
    Number(lotery.isuue_time);
    console.log(this.url+lotery.id)    
    var response = this.http.put(this.url+lotery.id,lotery).map(res => res.json());    
    return response;
  }

  deleteLotery(id: number){      
    this.url = this.rutas.lotery('',0); 
    var response = this.http.delete(this.url+id).map(res => res.json());    
    return response;
  }

}
