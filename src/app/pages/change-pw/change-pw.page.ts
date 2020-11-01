import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.page.html',
  styleUrls: ['./change-pw.page.scss'],
})
export class ChangePwPage implements OnInit {
  password1:string="";
  password2:string="";
  password3:string="";
  disableButton;

  id:string="";

  showpassword1 = false
  passwordtoggleicon1 ="eye";

  showpassword2 = false
  passwordtoggleicon2 ="eye";

  showpassword3 = false
  passwordtoggleicon3 ="eye";




  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
	  private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,) {
   // showpassword;
    //passwordtoggleicon;

    this.storage.get('storage_XXX').then((val) => {
      console.log('Your age is',  val.id);
      //this.password1=val.password;
      this.id=val.id;
      
  });
   }

  ngOnInit() {
  }

  togglepassword1() : void{
    if(this.showpassword1==true){
      this.showpassword1=false;
    }

    else{
      this.showpassword1=true;
    }
    

    if(this.passwordtoggleicon1 =='eye'){
        this.passwordtoggleicon1='eye-off';
    }
    else{
      this.passwordtoggleicon1='eye';
    }
  
  }
  togglepassword2() : void{
    if(this.showpassword2==true){
      this.showpassword2=false;
    }

    else{
      this.showpassword2=true;
    }
    

    if(this.passwordtoggleicon2 =='eye'){
        this.passwordtoggleicon2='eye-off';
    }
    else{
      this.passwordtoggleicon2='eye';
    }
  
  }

  togglepassword3() : void{
    if(this.showpassword3==true){
      this.showpassword3=false;
    }

    else{
      this.showpassword3=true;
    }
    

    if(this.passwordtoggleicon3 =='eye'){
        this.passwordtoggleicon3='eye-off';
    }
    else{
      this.passwordtoggleicon3='eye';
    }
  
  }
  
  async changepw(){
    if(this.password1==""){
      this.presentToast("current password is required");
    }else if(this.password2=="")
    {
      this.presentToast("suggest a new password");
    }
    else if(this.password3=="")
    {
      this.presentToast("confirm new password");
    }
   
    else{
      this.disableButton=true;
      const loader=await this.loadingCtrl.create({
          message:'Please wait......',
      });
      loader.present();
        return new Promise(resoler=>{
          let body={
           
            
            password3:this.password3,
            id:this.id,

            
           
          }
          this.acessPr.postChangepw(body,this.id).subscribe((res:any)=>{
              if(res.status==true){
                loader.dismiss();
                this.disableButton=false;
                this.presentToast(res.message);
                //this.storage.set('storage_XXX',res.data);
               // this.router.navigate(['/farmer-profile']);
                //console.log(res.data);
                
               /* this.storage.get('storage_XXX').then((val) => {
                  console.log('Your age is',  val.telephone_number);*/
                 // val.telephone_number
                  
                //var getBackMyJSON = $('storage_XXX').data('telephone_number').key;
                //console.log('Your age is', getBackMyJSON);
                //this.navCtrl.push(farmerprofile,body);
                //});
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
           this.changepw()
          }
        }
      ]
    });
  
    await alert.present();
  }



  }
 
  

