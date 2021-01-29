import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-rejecteddetails',
  templateUrl: './rejecteddetails.page.html',
  styleUrls: ['./rejecteddetails.page.scss'],
})
export class RejecteddetailsPage implements OnInit {
  telephone_number:any="";
  data:any;
  nic:string="";
  loan_id:string="";
  id:string="";
  dat:number;
  public items : any;


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

 

    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
  
  
    this.http.get(AccessProviders.server+'/showrejectloandata/'+res).map(res => res).subscribe((res:any)=>{ 
      //this.storage.set('store_nic',res);
        console.log(res);
        this.items=res.message;
    
      
        });
    });

  }

  application(){
    this.navCtrl.navigateRoot('/loanviews');
  }

}
