import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro2/access';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-banklogin',
  templateUrl: './banklogin.page.html',
  styleUrls: ['./banklogin.page.scss'],
})
export class BankloginPage implements OnInit {
  bank_id:string="";
  password:string="";

  disableButton;

  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
  ) { }

  ngOnInit() {
  }
  
  async tryLogin(){

    if(this.bank_id==""){
      this.presentToast("Bank id is required");
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
  
            bank_id:this.bank_id,
            password:this.password,
           
          }
          this.acessPr.postLogin(body).subscribe((res:any)=>{
              if(res.status==true){
                loader.dismiss();
                this.disableButton=false;
                this.presentToast(res.message);
                this.storage.set('storage_XXX',res.data);
                this.router.navigate(['/bankintro']);
                console.log("my data",res.data);
                
                /*this.storage.get('storage_XXX').then((val) => {
                  console.log('Your age is',  val.username);
                 // val.telephone_number
                  
                //var getBackMyJSON = $('storage_XXX').data('telephone_number').key;
                //console.log('Your age is', getBackMyJSON);
                //this.navCtrl.push(farmerprofile,body);
                });*/
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


    //this.router.navigate(['/intro']);
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


}
