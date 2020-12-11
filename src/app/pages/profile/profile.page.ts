import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username:string="";
  datastore:any;
  
  telephone_number:string="";
 data:any;

 choose:string="";
 nameini:string="";
 namefull:string="";
 address :string="";
 TpNo :string="";
 dob:string="";
 nic:string="";
 email:string="";
data2:any;
  
  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,) { 
         
 
    }

    doRefresh(event:any) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        this.hee();
        //console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

    hee(){
      this.storage.get('storage_XXX').then((res)=>{
        // console.log('Your name is',  res.username);
         this.username=res.username;
         //console.log('Your name is',  this.username);
       
           //console.log(res);
           //this.datastore=res;
           this.nic=res.nic;
           //console.log(this.telephone_number);
          
           
         this.http.get(AccessProviders.server+'/getdetails/'+this.nic).map(res => res).subscribe(res=>{ 
           this.data2=res;  
           //this.storage.set('storage2',this.data2);
           //this.namefull=this.data2.namefull;
           this.choose=this.data2.choose;
           this.nameini=this.data2.nameini;
           this.namefull=this.data2.namefull;
           this.address=this.data2.address;
           this.TpNo=this.data2.TpNo;
           this.dob=this.data2.dob;
           this.nic=this.data2.nic;
           this.email=this.data2.email;
       
    
           console.log(this.data2.email);
         //this.storage.set('storage2',res);
             
              // console.log(res);
              /* this.storage.get('storage2').then((res)=>{
                 //console.log(res.nameini);
       
    
                 this.choose=res.choose;
                 this.nameini=res.nameini;
                 this.namefull=res.namefull;
                 this.address=res.address;
                 this.TpNo=res.TpNo;
                 this.dob=res.dob;
                 this.nic=res.nic;
                 this.email=res.email;
                  this.data=res;
    
       
                 console.log(this.dob);
       
       
               })*/
               
               
            
             
             
           },
           err=>{
               console.log(err);
              }
           )
         });
    }

  ngOnInit() {
    this.hee();
    //window.location.reload();
  }
  async tryUpdate(){
    if(this.data2==null){
      this.router.navigate(['/edit']);
    }
    else{
      this.router.navigate(['/updatedetails']);
    }
    
   
  }

  
}
