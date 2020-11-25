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
  }

  set(){
   // console.log(this.app_id);
    if(this.hideMe==false){
      this.icon="chevron-up-outline";
      this.hideMe=true;
    }

    else{
      this.hideMe=false;
      this.icon="chevron-down-outline";
    }
  
  
  }


}
