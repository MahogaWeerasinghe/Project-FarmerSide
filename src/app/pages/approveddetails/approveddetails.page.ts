import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-approveddetails',
  templateUrl: './approveddetails.page.html',
  styleUrls: ['./approveddetails.page.scss'],
})
export class ApproveddetailsPage implements OnInit {
  public items : any;

  constructor(
    private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
  ) { }

  ngOnInit() {
    
  this.storage.get("storage_appid").then((res)=>{
    console.log(res);

    

 


   
 this.http.get(AccessProviders.server+'/showapproveloandata/'+res).map(res => res).subscribe((res:any)=>{ 
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
