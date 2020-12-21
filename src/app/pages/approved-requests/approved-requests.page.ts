import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User,AccessProviders } from '../../pro2/access';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { timeInterval } from 'rxjs/operators';
@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.page.html',
  styleUrls: ['./approved-requests.page.scss'],
})
export class ApprovedRequestsPage implements OnInit {

  loan_name:string="";
  loan_id:string="";
  items:any;
  bank_id:string="";
  id:string="";

  constructor(private router: Router,
    public http:HttpClient,
    private storage:Storage,
    private accessPr:AccessProviders,
  ) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('val bank id is ',val.bank_id);
      this.bank_id=val.bank_id;
      console.log('bank id is ', this.bank_id);

      this.http.get(AccessProviders.server+'/getLoans2/'+this.bank_id).map(res => res).subscribe((res:any)=>{
        this.items=res.message;
        console.log(this.items);
        this.loan_name=this.items.loan_name;
        console.log(this.items.loan_name);
      });
    });
      
  }

  viewApplicants(event:any){
    console.log('id taken is ', event.target.id);
    this.id=event.target.id;
    console.log('id taken done ', this.id);

    this.storage.set('storage_id', this.id);

    this.storage.get('storage_id').then((res)=>{
      console.log(res);
    });

    this.router.navigate(['/approved-request-loan']);
  }

}
