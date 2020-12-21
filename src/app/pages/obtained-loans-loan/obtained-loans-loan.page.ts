import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';

@Component({
  selector: 'app-obtained-loans-loan',
  templateUrl: './obtained-loans-loan.page.html',
  styleUrls: ['./obtained-loans-loan.page.scss'],
})
export class ObtainedLoansLoanPage implements OnInit {

  /* obtained_date:string="";
  nameini:string="";
  loan_id:string="";
  //nic:string="";
  items:any;
  dat:string="";
  hideMe=false; */

  date:string="";
  nameini:string="";
  loan_id:string="";
  items:any;
  dat:string="";

  constructor(private router: Router,
    private storage:Storage,
    public accessPr: AccessProviders,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    /* this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
      console.log('loan id is ', this.loan_id);

      this.http.get(AccessProviders.server+'/getObtainedDetails/'+this.loan_id).map(res=>res).subscribe((res:any)=>{
        this.items=res.message;
        console.log(this.items);
      });
    }); */

    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
      console.log(this.loan_id);

      this.http.get(AccessProviders.server+'/getobtainDetails2/'+this.loan_id).map(res=>res).subscribe((res:any)=>{
        this.items=res.message;
        console.log(this.items);
      });
    });
  }

  viewObtainedLoans(event:any){
    //this.hideMe=true;
    /* console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    //this.storage.clear();
    this.storage.set('storage_appid', this.dat);

    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
    });

    this.router.navigate(['/obtained-loan-view']);
  } */

  console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_appid', this.dat);

    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
    });

    this.router.navigate(['/obtained-loan-view']);
  }

}
