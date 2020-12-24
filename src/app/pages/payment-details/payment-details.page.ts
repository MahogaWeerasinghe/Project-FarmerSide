import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';

import * as moment from 'moment';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {

  hide1=false;
  hide2=false;
  hide3=false;
  nic:string="";
  bank_id:string="";
  obtain_id:number;

  hid:any;
  //loan_name:string="";
  items:any;
  dat: any;
  values:any;
  values2:any;

  length:number;
  leng:any;
  total_amount:number;
  paid_amount:number;
  loan_id:string;
  Installment_date:string;
  Installment:number;
  to_be_paid_amount:number=0;

  to_be_paid_date:string;
  rating_no:number;

  constructor(
    private router:Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
  ) {
   }

   doRefresh(event:any) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.showDetails();
      this.Installment=0;
      this.Installment_date=null;
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.showDetails();
  }

  showDetails(){

    this.storage.get("storage_obtainid").then((res)=>{
      console.log(res);
      this.obtain_id=res;

      this.http.get(AccessProviders.server+'/getPayments2/'+this.obtain_id).map(res=>res).subscribe((res:any)=>{
        this.values=res.message;
        console.log(this.values);

        

        if(this.values.length==0){
          this.http.get(AccessProviders.server+'/getobtain2/'+this.obtain_id).map(res=>res).subscribe((res:any)=>{
              console.log(res);
              this.total_amount=res.message[0].total_amount;
              this.loan_id=res.message[0].loan_id;
              this.hide2=true;
              this.hide1=false;
              this.paid_amount=0;
          });

        }

        else{
          this.http.get(AccessProviders.server+'/getobtain2/'+this.obtain_id).map(res=>res).subscribe((res:any)=>{
            console.log(res);
            this.loan_id=res.message[0].loan_id;
            this.total_amount=res.message[0].total_amount;
        });

        this.http.get(AccessProviders.server+'/getPaymentsfi2/'+this.obtain_id).map(res=>res).subscribe((res:any)=>{
          this.values2=res.message;
          console.log(this.values2);
       
    
          this.to_be_paid_amount=this.values2.to_be_paid_amount;
         //this.loan_id=this.values2.loan_id;

          this.hide1=true;
          this.hide2=false;

          this.paid_amount=this.values2.paid_amount;
          console.log(this.values);
        });
        }
        //console.log('payment details are ', this.values);
        //console.log('date paid is ', this.values[0].Installment_date);
      });



    });
   /* this.storage.get('storage_borrower').then((val) => {
      console.log('val taken by storage borrower',  val);
      this.items=val;
      console.log('items are ', this.items);
      console.log('total amount here is', this.items[0].total_amount);


      /* this.installmentValue=this.items[0].amount/this.items[0].no_of_installment;
      console.log('this.items.borrowed_amount is ', this.items[0].amount);
      console.log('this.items.no_of_installment is ', this.items[0].no_of_installment);
      console.log('this.installmentValue is ', this.installmentValue); 

      length = this.items.length;
      console.log('length of items array is ', length);

      this.storage.get('storage_borrower').then((val2)=>{
        console.log('val12 values are ', val2);
        this.obtain_id=val2[0].obtain_id;
        console.log('obtained id is ', this.obtain_id);
        this.http.get(AccessProviders.server+'/getPayments/'+this.obtain_id).map(res=>res).subscribe((res:any)=>{
          this.values=res.message;
          console.log('payment details are ', this.values);
          console.log('date paid is ', this.values[0].Installment_date);
        });
      });

      leng = this.values.message;
      //console.log('length of payments array is ', leng);

      for(let i=0; i<length;i++){
        this.items[i].period_years=this.items[i].no_of_installment/12;
        this.items[i].interest=this.items[i].amount*this.items[i].interest_rate/100*this.items[i].no_of_installment/12;
        this.items[i].installment_without_interest=this.items[i].amount/this.items[i].no_of_installment;
        this.items[i].overall_to_be_paid=this.items[i].amount+this.items[i].interest;
        this.items[i].remaining_to_be_paid=this.items[i].overall_to_be_paid-this.items[i].total_amount;
        console.log('for of loop ', this.items[i].overall_to_be_paid);
        console.log('amount to be paid here is ', this.items[i].remaining_to_be_paid);
      }

      //for(let )
      
    });*/
  }

  updatePayment1(){
    let body={
      obtain_id:this.obtain_id,
      loan_id:this.loan_id,
      Installment_date:moment(this.Installment_date).format('YYYY-MM-DD'),
      Installment:this.Installment,
      paid_amount:this.Installment,
      to_be_paid_amount:this.total_amount-this.Installment,
      //to_be_paid_date:moment(this.to_be_paid_date).format('YYYY-MM-DD'),
      rating_no:0
    }
    //this.router.navigate(['/rating']);
    this.acessPr.postpaymentdetails(body).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");
          

          
      }else{
        this.router.navigate(['/rating']);
       
      }
  },(err=>{
  
  })); 
       
    console.log(body);
  }

  updatePayment2(){
  console.log(this.total_amount);
    //this.paid_amount=(this.Installment)+(this.paid_amount);
    console.log(this.paid_amount);

    let body={
      obtain_id:this.obtain_id,
      loan_id:this.loan_id,
      Installment_date:moment(this.Installment_date).format('YYYY-MM-DD'),
      Installment:this.Installment,
      paid_amount:this.hid,
      to_be_paid_amount:this.total_amount-this.hid,
     // to_be_paid_date:moment(this.to_be_paid_date).format('YYYY-MM-DD'),
      rating_no:0
    }

    console.log(body);

  
    console.log(this.hid);
    //this.router.navigate(['/rating']);

    this.acessPr.postpaymentdetails(body).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");
          

          
      }else{
        this.router.navigate(['/rating']);
       
      }
  },(err=>{
  
  })); 
       
    console.log(body);

    this.router.navigate(['/rating']);

  }

  
       

}
