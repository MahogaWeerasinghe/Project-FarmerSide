import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.page.html',
  styleUrls: ['./farmer-profile.page.scss'],
})
export class FarmerProfilePage implements OnInit {
  public segment: string = "list1";



  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  username:string="User";
  datastore:any;
  //server:string='http://localhost:8000';
  telephone_number:string="";
 data:any;

 choose:string="";
 nameini:string="";
 namefull:string="";
 address :string="";
 TpNo :string="";
 dob:string="";
 nic:string="";
data2:any;
val:any;
rat:number;
arr:any=[0];
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
    private acessPr:AccessProviders,)  { 
     


  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.get();
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
    this.get();
    
  }

  get(){
    this.storage.get('storage_XXX').then((res)=>{

      this.username=res.username;
      
        this.nic=res.nic;
        
        console.log("in farmer profile",this.nic);
       
        
      this.http.get(AccessProviders.server+'/getdetails/'+this.nic).map(res => res).subscribe(res=>{ 
        this.data2=res;  
        //this.namefull=this.data2.namefull;
        console.log("in farmer profile ",this.data2.nic);
    
      this.storage.set('storage2',res);
          
            console.log(res);
            this.storage.get('storage2').then((res)=>{
              //console.log(res.nameini);
    
     
              this.choose=res.choose;
              this.nameini=res.nameini;
              this.namefull=res.namefull;
              this.address=res.address;
              this.TpNo=res.TpNo;
              this.dob=res.dob;
              this.nic=res.nic;
    
              //console.log("in farmer profile ",this.nic);
    
    
            })
            
            
         
          
          
        },
        err=>{
            console.log(err);
           }
        )

        this.http.get(AccessProviders.server+'/showpaymentdetailsrat/'+this.nic).map(res => res).subscribe((res:any)=>{ 
            console.log(res.message.length);
            this.num=res.message.length;

        
            if(this.num==0){
              this.zero=true;
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


      });

      
      console.log(this.ori);

  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
 
  

   // val.telephone_number
    
  //var getBackMyJSON = $('storage_XXX').data('telephone_number').key;
  //console.log('Your age is', getBackMyJSON);
  //this.navCtrl.push(farmerprofile,body);
  //});
  
/*  Show(){
    this.router.navigate(['/tabs']);
  }

  ApplyaLoan(){
   this.router.navigate(['/crop']);
  }

 Edit(){
    this.router.navigate(['/edit']);
  }*/

  where(){
    if(this.dob==""){
      this.router.navigate(['/edit']);
    }
    else{
      this.router.navigate(['/updatedetails']);
    }
  }

  tobanks(){
    this.router.navigate(['/crop']);
  }
}
