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

sum:number=0;
num:number;
ave:number;
ori:number;

zero=false;
one=false;
two=false;
three=false;
four=false;
five=false;
  
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

               this.http.get(AccessProviders.server+'/showpaymentdetailsrat/'+this.nic).map(res => res).subscribe((res:any)=>{ 
                console.log(res.message.length);
                this.num=res.message.length;
    
            
                if(this.num==0){
                  this.zero=true;
                  console.log("zero");
                }
    
                else{
                this.http.get(AccessProviders.server+'/showpaymentdetailsratsum/'+this.nic).map(res => res).subscribe((res:any)=>{ 
                    this.sum=res.message;
                    console.log(this.num);
                    console.log(this.sum);
                    this.ave=this.sum/this.num;
                    console.log(this.ave);
    
                    this.ori=Math.round(this.ave);
                    console.log(this.ori);
    
                    if(this.ori==1){
                      this.one=true;
                    }
    
                    else if(this.ori==2){
                        this.two=true;
                    }
    
                    else if(this.ori==3){
                        this.three=true;
                    }
    
                    else if(this.ori==4){
                        this.four=true;
                    }
    
                    else if(this.ori==5){
                      this.five=true;
                    }
    
                    else{
                      this.zero=true;
                    }
                });
    
            }
              
    
              
            });
    
               
               
            
             
             
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
