import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { Location } from "@angular/common";

@Component({
  selector: 'app-aihistorydetails',
  templateUrl: './aihistorydetails.page.html',
  styleUrls: ['./aihistorydetails.page.scss'],
})
export class AihistorydetailsPage implements OnInit {
  rep_id:string;
  data:any;
  data2:any;
  app_id:string;
  data3:any;
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

  back(){
    this.home.back();
  }

  ngOnInit() {
    this.call();
  }

  call(){
    this.storage.get("storage_id").then((res)=>{
      console.log(res);
      this.rep_id=res;
      this.http.get(AccessProviders.server+'/getpers/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
          this.data=res.message;
          this.app_id=res.message[0].app_id;
          
       });

       this.http.get(AccessProviders.server+'/showARloans/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
        this.data2=res.message;
         
         
       });

       this.http.get(AccessProviders.server+'/showestimate/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
        this.data3=res.message;
         
         
       });

    




    });


  }

  location(){
    this.storage.set('storage_location',this.app_id);

    this.router.navigate(['/location']);
  }


}
