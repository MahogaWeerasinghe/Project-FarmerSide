import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { User, AccessProviders } from '../../pro2/access';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { promise } from 'protractor';
import { duration } from 'moment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  nic:string="";
  items:any;
  bank_id:string="";

  disableButton;

  constructor(private router: Router,
    private storage:Storage,
    private accessPr:AccessProviders, 
    public http:HttpClient, 
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.getBorrowers();
  }


  getBorrowers(){
    this.storage.get('storage_XXX').then((val)=>{
      console.log('bank id is ', val.bank_id);
      console.log('val value is ', val);
      this.bank_id=val.bank_id;
      
    });
  }


  /* search(){
    this.router.navigate(['/payment-confirm']);
  } */

  search(event:any){

  }

  async Search(event:any){
    
    console.log('myyy id taken is', event.target.id);


    if(this.nic==""){
      this.presentToast('Enter a NIC number to continue');
    }else{
      this.disableButton=true;
      const loader = await this.loadingCtrl.create({
        message: 'Please wait..',
        //duration: 1000
      });
      loader.present();

      return new Promise(resoler=>{
        let body={
          nic:this.nic,
          bank_id:this.bank_id,
        }

        this.accessPr.postBorrower(body, this.nic, this.bank_id).subscribe((res:any)=>{
          if(res.status==true){
            loader.dismiss();
            this.disableButton=false;

            console.log('nic data ', res.data);
            this.items=res.data;
            console.log('res data ',this.items);

            this.storage.set('storage_borrower', res.data);
            console.log('set storage ', res.data);
            this.storage.get('storage_borrower').then((val:any)=>{
              console.log('val is', val);
              this.items=res;
              console.log('items are ', this.items.data);
              console.log('nic is ', this.items.data[0].nic);
              this.router.navigate(['/payment-confirm']);
            });

            /* else{
              this.presentToast('Not a borrower');
            } */
            //console.log('nic is ',this.items[0].nic);     
          }

          else{
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
  

  async presentToast(a){
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  async presentAlert(msg){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: msg,

      buttons: [
        {
          text: 'close',
          handler: () => {
            console.log('close attempt');
          }
        },{
          text: 'Try Again',
          handler: () => {
            this.Search(event);
            console.log('Try same attempt again')
          }
        }
      ]
    });
    await alert.present();
  }

}
