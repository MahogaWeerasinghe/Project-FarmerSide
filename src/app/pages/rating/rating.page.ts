import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';

import * as moment from 'moment';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  star1=false;
  star2=false;
  star3=false;
  star4=false;
  star5=false;
  i:any=0;


  obtain_id:any;
  payment_id:any;
  val:any;

  constructor(
    private router:Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
  ) { }

  ngOnInit() {
  }

  click1(){
    console.log("five");
    if(this.star1==false){
        this.i=5;
        console.log(this.i);
        this.star1=true;
    }
    else{
      this.i=5;
      console.log(this.i);
      this.star1=false;
    }
  }

  click2(){
    console.log("four");
    if(this.star2==false){
      this.i=4;
      console.log(this.i);
      this.star2=true;
  }
  else{
    this.i=4;
    console.log(this.i);
    this.star2=false;
  }
    
  }

  click3(){
    console.log("three");
    if(this.star3==false){
      this.i=3;
      console.log(this.i);
      this.star3=true;
  }
  else{
    this.i=3;
    console.log(this.i);
    this.star3=false;
  }
    
  }

  click4(){
    console.log("two");
    if(this.star4==false){
      this.i=2;
      console.log(this.i);
      this.star4=true;
  }
  else{
    this.i=2;
    console.log(this.i);
    this.star4=false;
  }
    
  }

  click5(){
    console.log("one");
    if(this.star5==false){
      this.i=1;
      console.log(this.i);
      this.star5=true;
  }
  else{
    this.i=1;
    console.log(this.i);
    this.star5=false;
  }
    
  }

  submit(){
    this.storage.get("storage_obtainid").then((res)=>{
      console.log(res);
      this.obtain_id=res;

    this.http.get(AccessProviders.server+'/getPaymentsfi2/'+this.obtain_id).map(res=>res).subscribe((res:any)=>{
      this.val=res.message;
      this.payment_id=res.message.payment_id;

      console.log(this.payment_id);
      console.log(this.val);
      //this.payment_id=this.val.payment_id;

      let body={
        rating_no:this.i
      }
  
      console.log(body);
  
    console.log(this.payment_id);

   this.acessPr.postpaymentrating(body,this.payment_id).subscribe((res:any)=>{
        if(res.status==true){
            
            this.router.navigate(['/payment-details']);
            
  
            
        }else{
          console.log("not correct");
         
        }
    },(err=>{
    
    })); 
         
     




    });
     
  });

 

    

  }
  

}
