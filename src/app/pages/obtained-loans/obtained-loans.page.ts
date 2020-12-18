import { Component, OnInit } from '@angular/core';

import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-obtained-loans',
  templateUrl: './obtained-loans.page.html',
  styleUrls: ['./obtained-loans.page.scss'],
})
export class ObtainedLoansPage implements OnInit {
  hideMe=false;
  icon:string="chevron-down-outline";
  data:any;
  nic:string;
  dat:number;
  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
  ) { }

  ngOnInit() {
    this.call();
  }

  call(){
    this.storage.get('storage_XXX').then((res)=>{
      console.log(res.nic);
      this.nic=res.nic;
   

    this.http.get(AccessProviders.server+'/getobtain/'+this.nic).map(res => res).subscribe((res:any)=>{ 
      //this.storage.set('store_nic',res);
      console.log(res);
      this.data=res.message;

    
       
     });

    });
  }

  more(event){
  
    
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_obid',this.dat);
   
    this.storage.get("storage_obid").then((res)=>{
      console.log(res);

  });

  this.navCtrl.navigateRoot('/obtain-loans-view');
}

  
  



}
