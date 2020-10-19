import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
//import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root' // just before your class
})

export class AccessProviders{
 server:string='http://localhost:8000';


   constructor(
       
       public http:HttpClient,
       
  ) { }
  
        postData(body){
            let headers=new HttpHeaders({
                'Content-Type':'applicationJson,charset-UTF-8'
            });
            let options={
                 headers:headers
            }
            
            return this.http.post(this.server+'/register',JSON.stringify(body),{
                headers: new HttpHeaders().set('Content-Type', 'applicationJson,charset-UTF-8'),
              }).timeout(59000)
            . map(res=>res);
            
            
        }
       
        
}