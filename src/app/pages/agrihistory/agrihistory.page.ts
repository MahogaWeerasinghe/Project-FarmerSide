import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { Location } from "@angular/common";

@Component({
  selector: 'app-agrihistory',
  templateUrl: './agrihistory.page.html',
  styleUrls: ['./agrihistory.page.scss'],
})
export class AgrihistoryPage implements OnInit {
  ao_id:string;
  items:any;
  dat:any;
  constructor(private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private home: Location) { }

  ngOnInit() {
    this.call();
  }

  back(){
    this.home.back();
  }

  call(){
    this.storage.get("storage_AOH").then((res)=>{
      console.log(res);
      this.ao_id=res;

      console.log(this.ao_id);

      this.http.get(AccessProviders.server+'/viewagrihis/'+this.ao_id).map(res => res).subscribe((res:any)=>{ 
        this.items=res.message;
        //console.log("AO",this.items);
      });
  


    });
  }

  details(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_id',this.dat);
   
    this.storage.get("storage_id").then((res)=>{
      console.log(res);
    });

    this.navCtrl.navigateRoot('/agrihistorydetails');
  }

}
