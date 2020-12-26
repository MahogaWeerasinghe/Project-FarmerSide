import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';
import { Location } from "@angular/common";


@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.page.html',
  styleUrls: ['./paymentdetails.page.scss'],
})
export class PaymentdetailsPage implements OnInit {
  obtain_id:number;
  data:any;
  nic:string="";
  loan_id:string="";
  id:string="";
  dat:number;
  public items : any;
  latestdate:string="";

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

  ngOnInit() {
    this.call();
  }

  back(){
    this.home.back();
  }

  call(){
    this.storage.get("storage_payid").then((res)=>{
      console.log(res);
      this.obtain_id=res;
 


    this.http.get(AccessProviders.server+'/showpaymentdetails/'+this.obtain_id).map(res => res).subscribe((res:any)=>{ 
      //this.storage.set('store_nic',res);
      console.log(res.message);
      this.items=res.message;


 
       });

      });
     
    

  }

}
