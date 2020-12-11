import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
//import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
export class User {
    
  nic: string;

  constructor( nic: string) {
   
    this.nic = nic;
  }
}





@Injectable({
  providedIn: 'root' // just before your class
})

export class AccessProviders{
 //public static server:string='http://localhost:8000';
//public static server:string='http://192.168.43.128:8080'; 
public static server:string='http://192.168.8.183:8080';
 currentUser: User;
 isLogged: Boolean = false;

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
            
            return this.http.post(AccessProviders.server+'/api/farmers',JSON.stringify(body),{
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
              }).timeout(59000)
            . map(res=>res);
            
            
        }

        postLogin(body){
          let headers=new HttpHeaders({
              'Content-Type':'applicationJson,charset-UTF-8'
          });
          let options={
              headers:headers
          }
          this.currentUser = new User(body.nic);
          this.isLogged = true;
          return this.http.post(AccessProviders.server+'/login',JSON.stringify(body),{
              headers: new HttpHeaders().set('Content-Type', 'application/json'),
            })
          . map(res=>res
          );
          
          
      }

      postDetails(body){
        let headers=new HttpHeaders({
            'Content-Type':'applicationJson,charset-UTF-8'
        });
        let options={
             headers:headers
        }
        
        return this.http.post(AccessProviders.server+'/editDetails',JSON.stringify(body),{
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
          }).timeout(59000)
        . map(res=>res);
        
        
    }
    
    postChangepw(body,id){
      let headers=new HttpHeaders({
          'Content-Type':'applicationJson,charset-UTF-8'
      });
      let options={
           headers:headers
      }
      
      return this.http.post(AccessProviders.server+'/update/'+id,JSON.stringify(body),{
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }).timeout(59000)
      . map(res=>res);
      
      
  }

  postSubmit(body){
    let headers=new HttpHeaders({
        'Content-Type':'applicationJson,charset-UTF-8'
    });
    let options={
         headers:headers
    }
    
    return this.http.post(AccessProviders.server+'/submitloan',JSON.stringify(body),{
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      }).timeout(59000)
    . map(res=>res);
    
    
}

  
postUpdate(body,id){
  let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
       headers:headers
  }
  
  return this.http.post(AccessProviders.server+'/updatedetails/'+id,JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).timeout(59000)
  . map(res=>res);
  
  
}

postaccount(body){
  let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
       headers:headers
  }
  
  return this.http.post(AccessProviders.server+'/insertaccount',JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).timeout(59000)
  . map(res=>res);
  
  
}

postagri(body){
  let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
       headers:headers
  }
  
  return this.http.post(AccessProviders.server+'/submitAgrireports',JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).timeout(59000)
  . map(res=>res);
  
  
}

postofficer(body){
  let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
      headers:headers
  }
  this.currentUser = new User(body.bank_id);
  this.isLogged = true;
  return this.http.post(AccessProviders.server+'/loginofficer',JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  . map(res=>res);
           
}


postagrirep(body,id){
  let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
       headers:headers
  }
  
  return this.http.post(AccessProviders.server+'/updateagri/'+id,JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).timeout(59000)
  . map(res=>res);
  
  
}

postagribank(body){
  let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
       headers:headers
  }
  
  return this.http.post(AccessProviders.server+'/createagriloan',JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).timeout(59000)
  . map(res=>res);
  
  
}


postrequest(body){
  let headers=new HttpHeaders({
      'Content-Type':'applicationJson,charset-UTF-8'
  });
  let options={
       headers:headers
  }
  
  return this.http.post(AccessProviders.server+'/createreport',JSON.stringify(body),{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).timeout(59000)
  . map(res=>res);
  
  
}

     
        
}