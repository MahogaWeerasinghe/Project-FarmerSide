import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.page.html',
  styleUrls: ['./officers.page.scss'],
})
export class OfficersPage implements OnInit {
  nic:string="";
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
    const isNumeric = (val: string) : boolean => {
      return isNaN(Number(val));
   }
   

    if(this.nic==""){
      this.presentToast("NIC is required");
    }
    else if((this.nic.length!=10)){
      this.presentToast("NIC require 10 numbers");
    }
    else if(isNumeric(this.nic.substr(0,9))){
      this.presentToast("Numbers Only Have");
    }
   
    else if(this.nic.substr(this.nic.length-1)!="V"){
      this.presentToast("Last Character should be V");
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
  
            nic:this.nic,
            password:this.password,
           
          }
          this.acessPr.postofficer(body).subscribe((res:any)=>{
              if(res.status==true){
                loader.dismiss();
                this.disableButton=false;
                this.presentToast(res.message);
                this.storage.set('storage_XXX',res.data);

                if(res.data.type=="AO"){
                  this.router.navigate(['/agriofficer']);
                  console.log("my data",res.data);

                }

                else if(res.data.type=="AI"){
                  this.router.navigate(['/aiofficer']);
                  console.log("my data",res.data);
                }

                else{
                  this.router.navigate(['/doofficer']);
                  console.log("my data",res.data);
                }
                //this.router.navigate(['/intro']);
                
                
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
