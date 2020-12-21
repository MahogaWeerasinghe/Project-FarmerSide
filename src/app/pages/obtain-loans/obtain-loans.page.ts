import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro2/access';

@Component({
  selector: 'app-obtain-loans',
  templateUrl: './obtain-loans.page.html',
  styleUrls: ['./obtain-loans.page.scss'],
})
export class ObtainLoansPage implements OnInit {
  bank_id:string="";
  loan_name:string="";
  items:any;
  dat: string="";


  constructor(private router: Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('bank id is',  val.bank_id);
      this.bank_id=val.bank_id;

      this.http.get(AccessProviders.server+'/getLoans2/'+this.bank_id).map(res => res).subscribe((res:any)=>{ 
        this.items=res.message;
        console.log(this.items);
        console.log(this.items.loan_name);
        //console.log(this.bank_id);
        //console.log(res);
      });
    });
  }

  ViewLoans(event:any){

    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_loan',this.dat);
   
   /* this.storage.get("storage_loan").then((res:any)=>{
      console.log(res);
    });*/
  
    this.router.navigate(['/obtained-loans-loan']);
  }

}
