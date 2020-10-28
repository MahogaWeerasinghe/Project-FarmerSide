import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
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

  constructor(
  private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
	  private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,) {
      this.storage.get('storage_XXX').then((val) => {
        console.log('Your age is',  val.telephone_number);
        this.telephone_number=val.telephone_number
        
		});

		}

  ngOnInit() {
  }
	
 async tryEdit(){
    //this.router.navigate(['/login']);

  
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
            
            telephone_number:this.telephone_number,
            choose:this.choose,
            nameini:this.nameini,
            namefull:this.namefull,
            address:this.address,
            TpNo:this.TpNo,
            dob:this.dob,
            nic:this.nic,
            email:this.email,
            
           
          }
          this.acessPr.postDetails(body).subscribe((res:any)=>{
              if(res.status==true){
                loader.dismiss();
                this.disableButton=false;
                this.presentToast(res.message);
                this.router.navigate(['/farmer-profile']);

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
           this.tryRegister();
          }
        }
      ]
    });

    await alert.present();
  }
}

