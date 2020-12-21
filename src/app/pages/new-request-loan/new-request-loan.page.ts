import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';
@Component({
  selector: 'app-new-request-loan',
  templateUrl: './new-request-loan.page.html',
  styleUrls: ['./new-request-loan.page.scss'],
})
export class NewRequestLoanPage implements OnInit {

  //loan_name:string="";
  date:string="";
  nameini:string="";
  loan_id:string="";
  //nic:string="";
  items:any;
  dat:string="";

  constructor(private router: Router,
    private storage:Storage,
    public accessPr: AccessProviders,
    private http: HttpClient,
    ) { }
    doRefresh(event:any) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        this.call();
        //console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

  ngOnInit() {
    this.call();
    
  }

  call(){
    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
      console.log(this.loan_id);

      this.http.get(AccessProviders.server+'/getApplicationDetails2/'+this.loan_id).map(res=>res).subscribe((res:any)=>{
        this.items=res.message;
        console.log('query okey', this.items);
      });
    });
  }

  viewNewRequest(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_appid', this.dat);

    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
    });

    this.router.navigate(['/new-request-view']);
  }

}
