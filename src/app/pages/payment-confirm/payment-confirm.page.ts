import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';


@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.page.html',
  styleUrls: ['./payment-confirm.page.scss'],
})
export class PaymentConfirmPage implements OnInit {

  nic:string="";
  bank_id:string="";
  obtain_id:string[];
  //loan_name:string="";
  items:any;
  dat: any;
  //amount;
  //installmentValue;
  //overall_payment_amount:any;

  //overall_to_be_paid:any;

  length:number;

  constructor(
    private router:Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
  ) { }

  ngOnInit() {
    this.showDetails();
  }


  showDetails(){
    this.storage.get('storage_borrower').then((val) => {
      console.log('val taken by storage borrower',  val);
      this.items=val;
      console.log('items are ', this.items);
      console.log('amount here is', this.items[0].amount);


      /* this.installmentValue=this.items[0].amount/this.items[0].no_of_installment;
      console.log('this.items.borrowed_amount is ', this.items[0].amount);
      console.log('this.items.no_of_installment is ', this.items[0].no_of_installment);
      console.log('this.installmentValue is ', this.installmentValue); */

      length = this.items.length;
      console.log('length of items array is ', length);

      for(let i=0; i<length;i++){
        this.items[i].period_years=this.items[i].no_of_installment/12;
        //this.items[i].interest=this.items[i].amount*this.items[i].interest_rate/100*this.items[i].no_of_installment/12;
        this.items[i].interest=this.items[i].amount*this.items[i].interest_rate/100/12;
        this.items[i].installment_without_interest=this.items[i].amount/this.items[i].no_of_installment;
        this.items[i].overall_to_be_paid=this.items[i].amount+this.items[i].interest;
        this.items[i].remaining_to_be_paid=this.items[i].overall_to_be_paid-this.items[i].total_amount;
        console.log('for of loop ', this.items[i].overall_to_be_paid);
        console.log('amount to be paid here is ', this.items[i].remaining_to_be_paid);
      }
      
    });


    /* for(let i=0; i<length; i++){
      this.storage.get('storage_borrower').then((val)=>{
        console.log('obtain id is ', val.items[i].obtain_id);
        this.obtain_id[i]=val.items[i].obtain_id;
        console.log('this.obtain_id is ', this.obtain_id);
  
        this.http.get(AccessProviders.server+'/getPayments/'+this.obtain_id[i]).map(res=>res).subscribe((res:any)=>{
          this.dat=res.message;
    
          console.log('data taken to res are ', res);
          console.log('payments are ', this.dat);
          console.log('A payment paid_amount is ', this.dat[0].paid_amount);
        });
  
      });
    } */

    

    //this.storage.set('storage_obtain_id', this.items.obtain_id);
    //console.log('obtain storage is ', this.items.obtain_id);
  }
showMore(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set("storage_obtainid", this.dat);

    this.storage.get("storage_obtainid").then((res)=>{
      console.log(res);
    });

    this.router.navigate(['/payment-details']);
  }

}
