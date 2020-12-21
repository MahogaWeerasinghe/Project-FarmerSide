import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { promise } from 'protractor';
import { from } from 'rxjs';
import { AccessProviders } from '../../pro2/access';
import {Storage} from '@ionic/storage';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-loans',
  templateUrl: './new-loans.page.html',
  styleUrls: ['./new-loans.page.scss'],
})
export class NewLoansPage implements OnInit {

  loan_id:string="";
  bank_id:string="";
  loan_name:string="";
  genera_info:string="";
  specific_info:string="";
  eligible_borrowers:string="";
  eligible_crops:string="";
  maximum_loanamount:string="";
  Rateofinterest:string="";
  Repaymentperiod:string="";
  more_info:string="";
  loan_logo:string="";

  public items : any;

  disableButton;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private acessPr: AccessProviders,
    private alertCtrl: AlertController,
    public http:HttpClient,
    private storage:Storage,
    private router: Router,
  ) {
    this.getdata();
   }

  ngOnInit() {
  }

  async createLoan(){
    if(this.loan_id==""){
      this.presentToast("Loan id is required")
    }else if(this.loan_name==""){
      this.presentToast("Name of the loan is required");
    }else if(this.genera_info==""){
      this.presentToast("General information field is required");
    }else if(this.eligible_borrowers==""){
      this.presentToast("Eligible borrowers field is required");
    }else if(this.eligible_crops==""){
      this.presentToast("Eligible crops field is required");
    }else if(this.maximum_loanamount==""){
      this.presentToast("Maximum amount field is required");
    }else if(this.Rateofinterest==""){
      this.presentToast("Interest rate field is required");
    }else if(this.Repaymentperiod==""){
      this.presentToast("Repayment period field is required");
    }else{
      this.disableButton=true;
      const loader=await this.loadingCtrl.create({
        message: 'Please wait..'
      });
      loader.present();
      return new Promise(resoler=>{
        let body={
          loan_id: this.loan_id,
          bank_id: this.bank_id,
          loan_name: this.loan_name,
          genera_info: this.genera_info,
          specific_info: this.specific_info,
          eligible_borrowers: this.eligible_borrowers,
          eligible_crops: this.eligible_crops,
          maximum_loanamount: this.maximum_loanamount,
          Rateofinterest: this.Rateofinterest,
          Repaymentperiod: this.Repaymentperiod,
          more_info: this.more_info,
          loan_logo: this.loan_logo,
        }
        this.acessPr.postData(body).subscribe((data:any)=>{
          if(data.status==true){
            loader.dismiss();
            this.disableButton=false;
            //this.presentToast(data.message);
            this.presentToast("Successfully added the loan");
            this.router.navigate(['/bankintro']);


          }else{
            loader.dismiss();
            this.disableButton=false;
            //this.presentToast(data.message);
            this.presentToast("Successfully added the loan");
            this.router.navigate(['/bankintro']);
          }
        },(err=>{
          loader.dismiss();
          this.disableButton=false;
          this.presentAlert('Timeout');
        })
        );
      });
    }

  }

  getdata(){
    this.storage.get('storage_XXX').then((val:any) => {
      this.bank_id = val.bank_id;;

      this.http.get(AccessProviders.server+'/bankDetails2/'+this.bank_id).map(res => res).subscribe(res =>{
        this.items=res;
      });
    });
  }

  async presentToast(msg){
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'top'
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
            this.createLoan();
            console.log('Try same attempt again')
          }
        }
      ]
    });
    await alert.present();
  }

}
