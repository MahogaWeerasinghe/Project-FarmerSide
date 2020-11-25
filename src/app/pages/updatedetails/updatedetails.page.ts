import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';
import * as moment from 'moment';


@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.page.html',
  styleUrls: ['./updatedetails.page.scss'],
})
export class UpdatedetailsPage implements OnInit {
  username:string="";
  data2:any;

  telephone_number:string="";
  choose:string="";
  nameini:string="";
  namefull:string="";
  address:string="";
  TpNo:string="";
  dob:string="";
  nic:string="";
  email:string="";
  disableButton;

  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
	  private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    public http:HttpClient,) {
      this.storage.get('storage_XXX').then((val) => {
        console.log('Your age is',  val.telephone_number);
        this.telephone_number=val.telephone_number
        
    });

    
     }

    

  ngOnInit() {
    this.storage.get('storage_XXX').then((res)=>{

      this.username=res.username;
      
        this.telephone_number=res.telephone_number;
        
        console.log("in farmer profile",this.telephone_number);
       
        
      this.http.get(AccessProviders.server+'/getdetails/'+this.telephone_number).map(res => res).subscribe(res=>{ 
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
              this.email=res.email;
    
              //console.log("in farmer profile ",this.nic);
    
    
            })
            
            
         
          
          
        },
        err=>{
            console.log(err);
           }
        )
      });
  }

  async update(){
    
    if(this.choose==""){
      this.presentToast("Choose your type");
  }else if(this.nameini==""){
    this.presentToast("Name with initial is required");
  }else if(this.namefull=="")
  {
    this.presentToast("full name is required");
  }
  else if(this.address=="")
  {
    this.presentToast("address is required");
  }
  else if(this.TpNo=="")
  {
    this.presentToast("Telephone number is required");
  }
  else if(this.dob=="")
  {
    this.presentToast("date of birth is required");
  }
  else if(this.nic=="")
  {
    this.presentToast("NIC is required");
  }
  else if(this.email=="")
  {
    this.presentToast("email is required");
  }

  else{
    this.disableButton=true;
    const loader=await this.loadingCtrl.create({
        message:'Please wait......',
    });
    loader.present();
      return new Promise(resoler=>{
        let body={
          
          //telephone_number:this.telephone_number,
          choose:this.choose,
          nameini:this.nameini,
          namefull:this.namefull,
          address:this.address,
          TpNo:this.TpNo,
          dob:moment(this.dob).format('YYYY-MM-DD'),
          nic:this.nic,
          email:this.email,
          
         
        }
        this.acessPr.postUpdate(body,this.telephone_number).subscribe((res:any)=>{
            if(res.status==true){
              loader.dismiss();
              this.disableButton=false;
              this.presentToast(res.message);
              //this.storage.set('storage2',res.data);
              console.log(res.data);
              this.router.navigate(['/profile']);

            }else{
              loader.dismiss();
              this.disableButton=false;
              this.presentToast(res.message);
            }
        },(err=>{
          loader.dismiss();
          this.disableButton=false;
          this.presentAlert('Timeout');
        }));
      });

    
  }
}
async presentToast(a) {
  let toast = await this.toastCtrl.create({
    message: a,
    duration: 3000,
    position: 'top'
  });
toast.present();
}

async presentAlert(a) {
  const alert = await this.alertCtrl.create({
   backdropDismiss:false,
    header: a,
    
    buttons: [
      {
        text: 'close',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Try Again',
        handler: () => {
         this.update();
        }
      }
    ]
  });

  await alert.present();
}

  }


