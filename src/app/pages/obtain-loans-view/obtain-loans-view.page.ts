import { Component, OnInit } from '@angular/core';

import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';
import { Location } from "@angular/common";


@Component({
  selector: 'app-obtain-loans-view',
  templateUrl: './obtain-loans-view.page.html',
  styleUrls: ['./obtain-loans-view.page.scss'],
})
export class ObtainLoansViewPage implements OnInit {
  hideMe=false;
  icon:string="chevron-down-outline";
  data:any;
  nic:string;
  dat:number;
  obtain_id:number;
  application_id:number;
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
    this.storage.get('storage_obid').then((res)=>{
     console.log(res);
     this.obtain_id=res;
   

    this.http.get(AccessProviders.server+'/getobtainbyid/'+this.obtain_id).map(res => res).subscribe((res:any)=>{ 
      //this.storage.set('store_nic',res);
      console.log(res);
      this.data=res.message;
      this.application_id=res.message[0].application_id;

      

    
       
     });

    });
  }
  application(){
    this.storage.set('storage_appid',this.application_id);
    this.navCtrl.navigateRoot('/loanviews');

  }

  payments(){
    this.storage.set('storage_payid',this.obtain_id);
  
    this.navCtrl.navigateRoot('/paymentdetails');
  }
  

}
