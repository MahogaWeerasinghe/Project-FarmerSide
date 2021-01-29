import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro2/access';
import { Location } from "@angular/common";


import * as moment from 'moment';

@Component({
  selector: 'app-pending-reason',
  templateUrl: './pending-reason.page.html',
  styleUrls: ['./pending-reason.page.scss'],
})
export class PendingReasonPage implements OnInit {
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
  dat:any;
  rejected_reason:string;
  From_where:string;
  approve_id:number;

  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private home: Location
  ) { }

  back(){
    this.home.back();
  }

  
  ngOnInit() {
 
    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.application_id=val;

    

      this.http.get(AccessProviders.server+'/getapproveDetailsbyappid2/'+this.application_id).map(res=>res).subscribe((res:any)=>{
        //this.items=res.message;
        this.approve_id=res.message[0].approve_id;
      // this.loan_id=res.message[0].loan_id;

        
      });

    });

    this.storage.get("storage_reject").then((val)=>{
      console.log(val);
      this.dat=val;

    });

    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
      console.log(this.loan_id);
    });

    this.date = moment(this.today).format('YYYY-MM-DD')
    console.log(this.today);
    console.log(this.date);
  }

  submitPending(){
    if(this.dat==1){
      this.From_where="request"
    }
    else{
      this.From_where="approve"
    }
  
    if(this.rejected_reason==""){
      this.presentToast("reason is required");
    }
    else{

      let body={
          application_id:this.application_id,
          loan_id:this.loan_id,
          rejected_date:this.date,
          rejected_reason:this.rejected_reason,
          From_where:this.From_where
    
      }

      console.log(body);
      this.acessPr.postrejectapp(body).subscribe((res:any)=>{
        if(res.status==true){
            console.log(res);
                 
    let body={
      //size:this.size,
      
      bank_status:"true",
    

    }

    this.acessPr.postagrirep(body,this.application_id).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");
          if(this.dat==1){
            this.router.navigate(['/new-request-loan']);
          }
          else{
            let body={

              approve_status:"true",
            
            }
        
            this.acessPr.postapprove(body,this.approve_id).subscribe((res:any)=>{
              if(res.status==true){
                  console.log("correct");
                  //this.router.navigate(['/approved-request-loan']);
        
                  
              }else{
               
              }
          },(err=>{
          
          })); 
            this.router.navigate(['/approved-request-loan']);
          }
        
          

          
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
