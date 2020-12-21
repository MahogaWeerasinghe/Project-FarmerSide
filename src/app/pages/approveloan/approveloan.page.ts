
import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro2/access';

import * as moment from 'moment';


@Component({
  selector: 'app-approveloan',
  templateUrl: './approveloan.page.html',
  styleUrls: ['./approveloan.page.scss'],
})
export class ApproveloanPage implements OnInit {
  today = new Date();
  date:string;
  bank_id :string;
  items:any;
  arr:any[]=[];
  i:any;
  branch:string;
  date_you_come:string;
  special_notices:string;
  application_id:string;
  loan_id:string;

  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
  ) { }

  ngOnInit() {
    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.application_id=val;

    });

    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
      console.log(this.loan_id);
    });

    this.date = moment(this.today).format('YYYY-MM-DD')
    console.log(this.today);
    console.log(this.date);

    this.storage.get('storage_XXX').then((val:any) => {
      this.bank_id = val.bank_id;
   /* this.http.get(AccessProviders.server+'/bankDetails/'+this.bank_id).map(res=>res).subscribe((res:any)=>{
        this.items=res;
        console.log(this.items.branches);
        this.arr=this.items.branches.split(',');
        for(this.i in this.arr){
          console.log(this.arr[this.i]);
        }

    });*/
  });

  }


  submitaprove(){
    console.log(this.date);
    console.log(this.branch);
    console.log(this.date_you_come);
    console.log(this.special_notices);

   if(this.date_you_come==""){
      this.presentToast("reason is required");
    }
    else if(this.special_notices==""){
      this.presentToast("reason is required");
    }
    else{

      let body={
          application_id:this.application_id,
          loan_id:this.loan_id,
          approved_date:this.date,
          date_you_come:moment(this.date_you_come).format('YYYY-MM-DD'),
          //branch:this.branch,
          special_notices:this.special_notices,
          approve_status:"false"
    
      }

      console.log(body);
      this.acessPr.postreasonapp(body).subscribe((res:any)=>{
        if(res.status==true){
            console.log(res);
                 
    let body={
      //size:this.size,
      
      bank_status:"true",
      

     

    }

    this.acessPr.postagrirep(body,this.application_id).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");
          this.router.navigate(['/new-request-loan']);

          
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
