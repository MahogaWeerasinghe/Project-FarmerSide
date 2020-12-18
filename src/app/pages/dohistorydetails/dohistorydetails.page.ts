import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import * as moment from 'moment';
import { Location } from "@angular/common";



@Component({
  selector: 'app-dohistorydetails',
  templateUrl: './dohistorydetails.page.html',
  styleUrls: ['./dohistorydetails.page.scss'],
})
export class DohistorydetailsPage implements OnInit {
  choose:string;
  nameini:string;
  data:any;
  data2:any;
  data3:any;
  nic:string;
  mem_id:string;
  size:string;
  es_amount:string;
  do_id:string;
  do_status:string;
  rep_id:string="";
  do_date:string;
  app_id:string;

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
    this.storage.get("storage_id").then((res)=>{
      console.log(res);
      this.rep_id=res;
      this.http.get(AccessProviders.server+'/getpers/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
          this.data=res.message;
          console.log(this.data);
          this.choose=this.data[0].choose;
          this.nameini=this.data[0].nameini;
          this.nic=this.data[0].nic;
          this.mem_id=this.data[0].mem_id;
          this.app_id=this.data[0].app_id;
          console.log(this.choose);
         
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
