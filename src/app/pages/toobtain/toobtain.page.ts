import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro2/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

import * as moment from 'moment';

@Component({
  selector: 'app-toobtain',
  templateUrl: './toobtain.page.html',
  styleUrls: ['./toobtain.page.scss'],
})
export class ToobtainPage implements OnInit {
today = new Date();
date:string;
app_id:string;
items:any;
rate:number;
loan_id:string;
data:any;
d:any;

approve_id:number;

application_id:number; 
issued_date:string;
amount:number;
interest_rate:string;
expired_date:string;
total_amount:number;
installment:number;
no_of_installment:number;


istoday = new Date();

  constructor(private router: Router,
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,
    public actionSheetController: ActionSheetController,
    public alertCtrl:AlertController,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    ) { }

  ngOnInit() {
    
    this.date = moment(this.today).format('YYYY-MM-DD')
    console.log(this.today);
    console.log(this.date);

    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
      this.app_id=res;
  
      this.http.get(AccessProviders.server+'/getapproveDetailsbyappid2/'+this.app_id).map(res=>res).subscribe((res:any)=>{
        this.items=res.message;
        this.approve_id=res.message[0].approve_id;
        this.loan_id=res.message[0].loan_id;

        
      
    

      console.log(this.loan_id);
    this.http.get(AccessProviders.server+'/getLoanDetails2/'+this.loan_id).map(res=>res).subscribe((res:any)=>{
      this.data=res;
      console.log(res);
      this.rate=res.Rateofinterest;
    });

  });



    });



  }

  async Submit(){
    let confirm = await this.alertCtrl.create({
      header: 'Do you Approve this Application?',
      buttons:[
        {
          text: 'Yes',
        handler: () => {
          
          this.insert();
        }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


  insert(){

    
    this.issued_date=moment(this.istoday).format('YYYY-MM-DD');
    this.d=moment(this.issued_date).add(this.no_of_installment, 'M');
    console.log("d is",this.d._d);
    this.expired_date=moment(this.d._d).format('YYYY-MM-DD');
    console.log("ori ",this.expired_date);

    this.total_amount= (this.rate/1200*this.amount+ this.amount/this.no_of_installment)*this.no_of_installment;
    console.log(this.total_amount);

    this.installment=this.rate/1200*this.amount+ this.amount/this.no_of_installment;
    console.log(this.installment);

    //console.log('agree clicked');
    if(this.amount==0){
      this.presentToast("amount required");
    }
    else if(this.no_of_installment==0){
      this.presentToast("reason is required");
    }
    else{

      let body={
          application_id:this.app_id,
          loan_id:this.loan_id,
          issued_date:this.date,
          amount:this.amount,
          interest_rate:this.rate,
          expired_date:this.expired_date,
          total_amount:this.total_amount,
          installment:this.installment,
          no_of_installment:this.no_of_installment

    
      }

      console.log(body);
    this.acessPr.postobtainloan(body).subscribe((res:any)=>{
        if(res.status==true){
            console.log(res);
                 
    let body={
      //size:this.size,
      
      approve_status:"true",
      

     

    }

    this.acessPr.postapprove(body,this.approve_id).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");
          this.router.navigate(['/approved-request-loan']);

          
      }else{
       
      }
  },(err=>{
  
  })); 
           
            
        }
        else{
          console.log(res);
        }

      });


    } 
  }


  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'bottom'
    });
  toast.present();
  }

}
