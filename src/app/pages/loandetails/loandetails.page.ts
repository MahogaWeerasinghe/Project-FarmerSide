import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.page.html',
  styleUrls: ['./loandetails.page.scss'],
})
export class LoandetailsPage implements OnInit {
  server:string='http://localhost:8000';
  public items : any;
  i:any;
  data:any;
  dat:string="";
  loan_id:string;
  loan_name:string="";
  genera_info:string="";
  specific_info:string="";
  eligible_borrowers:string="";
  eligible_crops:string="";
  maximum_loanamount:string="";
  Rateofinterest:string="";
  Repaymentperiod:string="";
  more_info:string="";
  arr:any[]=[];
  arr2:any[]=[];
  
  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,) { 
      this.storage.get("storage_lo").then((res)=>{
        console.log(res);
        this.loan_id=res;
        console.log("in constructor : "+this.loan_id);
        //console.log("bank id :"+bank_id);
        this.http.get(AccessProviders.server+'/getloandetails/'+this.loan_id).map(res => res).subscribe(res=>{ 
        this.items=res;
        //console.log(this.items.loan_name);
        this.loan_name=this.items.loan_name;
        this.genera_info=this.items.genera_info;
        this.specific_info=this.items.specific_info;
        this.eligible_borrowers=this.items.eligible_borrowers;
        this.eligible_crops=this.items.eligible_crops;
        this.maximum_loanamount=this.items.aximum_loanamount;
        this.Rateofinterest=this.items.Rateofinterest;
        this.Repaymentperiod=this.items.Repaymentperiod;
        this.more_info=this.items.more_info;

        
        this.arr=this.eligible_borrowers.split(',');
        for(this.i in this.arr){
          console.log(this.arr[this.i]);
        }

        this.arr2=this.genera_info.split('.');
        for(this.i in this.arr2){
          console.log(this.arr2[this.i]);
        }
        //console.log(res);
        });

      });
    }

  ngOnInit() {
  }

}
