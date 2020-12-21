import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro2/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import * as moment from 'moment';
import { Location } from "@angular/common";

@Component({
  selector: 'app-application-form-view',
  templateUrl: './application-form-view.page.html',
  styleUrls: ['./application-form-view.page.scss'],
})
export class ApplicationFormViewPage implements OnInit {

  hideMe = false;
  hidePup = false;
  hideBan = false;
  hideSp = false;
  hidePro = false;
  hideWit = false;

  type:string="";

  repo:any;
  fix:any;
  mot:any;
  gu1:any;
  gua2:any;

  items:any;

  acc:any;

  nic:string="";

  one:string="";
  app_id:number;
  icon:string="chevron-down-outline";
  icon2:string="chevron-down-outline";
  icon3:string="chevron-down-outline";
  icon4:string="chevron-down-outline";
  icon5:string="chevron-down-outline";
  icon6:string="chevron-down-outline";

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
    this.storage.get('storage_appid').then((val)=>{
      this.app_id=val;
      console.log(this.app_id);

      this.http.get(AccessProviders.server+'/getApplicantDetails2/'+this.app_id).map(res=>res).subscribe((res:any)=>{
        console.log(res.message);
        this.items=res.message;
        this.nic=res.message[0].nic;
      });
    });
  }
  
  back(){
    this.home.back();
  }


  set(){
    if(this.hideMe==false){
      this.icon="chevron-up-outline";
      this.hideMe=true;
    }else{
      this.hideMe=false;
      this.icon="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";
  }

   setLoanPurposes(){
    if(this.hidePup==false){
      this.icon2="chevron-up-outline";
      this.hidePup=true;
    }else{
      this.hidePup=false;
      this.icon2="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";

    
  } 

  setSpouseDetails(){
    if(this.hideSp==false){
      this.icon3="chevron-up-outline";
      this.hideSp=true;
    }else{
      this.hideSp=false;
      this.icon3="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";
    this.type="repo";

    this.http.get(AccessProviders.server+'/getreports2/'+this.app_id+'/'+this.type).map(res => res).subscribe((res:any)=>{
      console.log(res);
      this.repo=res;
    
    });
  }

  setBankDetails(){
    if(this.hideBan==false){
      this.icon4="chevron-up-outline";
      this.hideBan=true;
    }else{
      this.hideBan=false;
      this.icon4="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";

    console.log(this.nic);

    this.http.get(AccessProviders.server+'/getaccounts2/'+this.nic).map(res=>res).subscribe((res)=>{
      console.log(res);
      this.acc=res;
    });
  }

  setPropertyDetails(){
    if(this.hidePro==false){
      this.icon5="chevron-up-outline";
      this.hidePro=true;
    }else{
      this.hidePro=false;
      this.icon5="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hideWit=false;
    this.icon6="chevron-down-outline";

    this.type="fix";
    this.http.get(AccessProviders.server+'/getreports2/'+this.app_id+'/'+this.type).map(res => res).subscribe((res:any)=>{
      console.log(res);
      this.fix=res;
    
    });

    this.type="mot";
    this.http.get(AccessProviders.server+'/getreports2/'+this.app_id+'/'+this.type).map(res => res).subscribe((res:any)=>{
      console.log(res);
      this.mot=res;
    
    });
  }

  setWitnessesDetails(){
    if(this.hideWit==false){
      this.icon6="chevron-up-outline";
      this.hideWit=true;
    }else{
      this.hideWit=false;
      this.icon6="chevron-down-outline";
    }
    //this.hideMe=!this.hideMe;
    this.hideMe=false;
    this.icon="chevron-down-outline";
    this.hidePup=false;
    this.icon2="chevron-down-outline";
    this.hideSp=false;
    this.icon3="chevron-down-outline";
    this.hideBan=false;
    this.icon4="chevron-down-outline";
    this.hidePro=false;
    this.icon5="chevron-down-outline";

    
    this.type="gu1";
    this.http.get(AccessProviders.server+'/getreports2/'+this.app_id+'/'+this.type).map(res => res).subscribe((res:any)=>{
      console.log(res);
      this.gu1=res;
    
    });

    this.type="gua2";
    this.http.get(AccessProviders.server+'/getreports2/'+this.app_id+'/'+this.type).map(res => res).subscribe((res:any)=>{
      console.log(res);
      this.gua2=res;
    
    });

  }

  where(){
    this.storage.set('storage_location',this.app_id);

    this.router.navigate(['/location']);
  }

  

}
