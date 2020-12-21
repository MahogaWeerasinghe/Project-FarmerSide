import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';

@Component({
  selector: 'app-approved-request-loan',
  templateUrl: './approved-request-loan.page.html',
  styleUrls: ['./approved-request-loan.page.scss'],
})
export class ApprovedRequestLoanPage implements OnInit {

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

      this.http.get(AccessProviders.server+'/getapproveDetails2/'+this.loan_id).map(res=>res).subscribe((res:any)=>{
        this.items=res.message;
        console.log(this.items);
      });
    });

  }


  viewApprovedRequest(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_appid', this.dat);

    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
    });

    this.router.navigate(['/approved-request-view']);
  }

}
