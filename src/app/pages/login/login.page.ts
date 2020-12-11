import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
//import {farmerprofile} from '../farmer-profile/farmer-profile.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string="";
 nic:string="";
  password:string="";

  disableButton;

  constructor(private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
) { }
  ngOnInit() {
  }

  openRegister(){
    this.router.navigate(['/register']);
  }

 async tryLogin(){
    //this.router.navigate(['/farmer-profile']);
   if(this.nic==""){
    this.presentToast("Telephone number is required");
  }else if(this.password=="")
  {
    this.presentToast("Password is required");
  }
  else{
    this.disableButton=true;
    const loader=await this.loadingCtrl.create({
        message:'Please wait......',
    });
    loader.present();
      return new Promise(resoler=>{
        let body={
         
          
          nic:this.nic,
          password:this.password,
         
        }
        this.acessPr.postLogin(body).subscribe((res:any)=>{
            if(res.status==true){
              loader.dismiss();
              this.disableButton=false;
              this.presentToast(res.message);
              this.storage.set('storage_XXX',res.data);
              this.router.navigate(['/farmer-profile']);
              console.log(res.data);
              
              this.storage.get('storage_XXX').then((val) => {
                console.log('Your login nic is',  val.nic);
                //console.log('Your login name is',  val.username);
              
              });
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
         this.tryLogin()
        }
      }
    ]
  });

  await alert.present();
}

    //this.router.navigate(['/farmer-profile']);
  
        
    openagri(){
      this.router.navigate(['/agriofficer']);
    }


}
  

