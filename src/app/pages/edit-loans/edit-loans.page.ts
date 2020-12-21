import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';
import { ModalController } from '@ionic/angular';
import { Binary } from '@angular/compiler';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-loans',
  templateUrl: './edit-loans.page.html',
  styleUrls: ['./edit-loans.page.scss'],
})
export class EditLoansPage implements OnInit {

  bank_id:string="";
  loan_id:string="";
  loan_name:string="";
  genera_info:string="";
  specific_info:string="";
  eligible_borrowers:string="";
  eligible_crops:string="";
  maximum_loanamount:string="";
  Rateofinterest:string="";
  Repaymentperiod:string="";
  more_info:string="";
  loan_logo:Binary;

  items:any;
  dat:any;

  disableButton;

  constructor(
    private storage: Storage,
    public http: HttpClient,
    private accessPr: AccessProviders,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.displayLoans();
  }

  displayLoans(){
    this.storage.get('storage_XXX').then((val:any) => {
      console.log('Your id is', val.bank_id);
      this.bank_id = val.bank_id;
      console.log('this.bank_id is', this.bank_id);

      this.http.get(AccessProviders.server+'/getLoans2/'+this.bank_id).map(res => res).subscribe((res:any)=>{ 
        this.items=res.message;

        //console.log('array or not ', Array.isArray(res));

        //this.storage.set('storage_loan', res);
        console.log('res ', res);
        console.log('this.items is ', this.items);
        console.log('b', this.items[0].loan_name);
        //console.log('loan1 id is ', this.items[0].loan_id);
      });
    });
  }

  displayLoanDetails(event:any){
  
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_loan',this.dat);
   
    this.storage.get('storage_loan').then((val:any) => {

      this.http.get(AccessProviders.server+'/getLoanDetails2/'+this.dat).map(res => res).subscribe(res=>{ 
        this.dat=res;
        console.log('loan details are ', this.dat);
        console.log('loan name is ', this.dat.loan_name);

        this.loan_name=this.dat.loan_name;
        console.log('loan name again ', this.loan_name);

        this.genera_info=this.dat.genera_info;
        this.specific_info=this.dat.specific_info;
        this.eligible_borrowers=this.dat.eligible_borrowers;
        this.eligible_crops=this.dat.eligible_crops;
        this.maximum_loanamount=this.dat.maximum_loanamount;
        this.Rateofinterest=this.dat.Rateofinterest;
        this.Repaymentperiod=this.dat.Repaymentperiod;
        this.more_info=this.dat.more_info;
        this.loan_logo=this.dat.loan_logo;
      });
    });
  }

  async updateLoan(){
    /* this.storage.get('storage_loan').then((val:any) => {
      console.log('dat is ', this.dat);
      console.log('dat.loan_id is ', this.dat.loan_id);

      this.http.post(AccessProviders.server+'/updateLoan/'+this.dat.loan_id, {
        genera_info: this.genera_info,
        loan_name: this.loan_name,
        specific_info: this.specific_info,
        eligible_borrowers: this.eligible_borrowers,
        eligible_crops: this.eligible_crops,
        maximum_loanamount: this.maximum_loanamount,
        Rateofinterest: this.Rateofinterest,
        Repaymentperiod: this.Repaymentperiod,
        more_info: this.more_info,
        loan_logo: this.loan_logo,

      }).subscribe((response)=>{
        console.log('res is ', response);
      })
    }); */

    this.disableButton=true;
      const loader=await this.loadingCtrl.create({
        message: 'Please wait..'
      });
      loader.present();
    console.log('loan id here ', this.dat.loan_id);
    return new Promise(resoler => {
      let body={
        loan_id: this.dat.loan_id,
        genera_info: this.genera_info,
        loan_name: this.loan_name,
        specific_info: this.specific_info,
        eligible_borrowers: this.eligible_borrowers,
        eligible_crops: this.eligible_crops,
        maximum_loanamount: this.maximum_loanamount,
        Rateofinterest: this.Rateofinterest,
        Repaymentperiod: this.Repaymentperiod,
        more_info: this.more_info,
        loan_logo: this.loan_logo
      }
      console.log('body ', body);
      console.log('loan id check ',this.loan_id);
      console.log('dat loan id check ',this.dat.loan_id);
      this.accessPr.postLoanUpdate(body, this.dat.loan_id).subscribe((data:any)=>{
        if(data.status==true){
          loader.dismiss();
          this.disableButton=false;
          //this.presentToast(data.message);
          this.presentToast("Successfully updated the loan");
          this.router.navigate(['/bankintro']);

        }else{
          loader.dismiss();
          this.disableButton=false;
          this.presentToast(data.message);
        }
      },(err=>{
        loader.dismiss();
        this.disableButton=false;
        this.presentAlert('Timeout');
      })
      );
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
            this.updateLoan();
            console.log('Try same attempt again')
          }
        }
      ]
    });
    await alert.present();
  }


}
