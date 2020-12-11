  
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string="";
  nic:string="";
  password:string="";

  disableButton;
  mine:any[]=[];

  constructor(private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
) { }

  ngOnInit() {
  }
  async tryRegister(){
  
    const isNumeric = (val: string) : boolean => {
      return isNaN(Number(val));
   }
   
      
   
  
    if(this.username==""){
        this.presentToast("User name is required");
    }else if(this.nic==""){
      this.presentToast("nic is required");
    }

   
    else if(this.password=="")
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
           
            username:this.username,
            nic:this.nic,
            password:this.password,
           
          }
          this.acessPr.postData(body).subscribe((res:any)=>{
              if(res.status==true){
                loader.dismiss();
                this.disableButton=false;
                this.presentToast(res.message);
                this.router.navigate(['/login']);

              }else{
                loader.dismiss();
                this.disableButton=false;
                this.presentToast(res.message);
              }
          },(err=>{
            loader.dismiss();
            this.disableButton=false;
            this.presentAlert('National identy Card Number is Used');
          }));
        });

      
    }
  }
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
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
          text: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Try Again',
          handler: () => {
           this.tryRegister();
          }
        }
      ]
    });

    await alert.present();
  }
}

 /* tryRegister(){
    this.router.navigate(['/login']);
  }*/


