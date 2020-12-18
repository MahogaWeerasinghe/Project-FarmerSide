import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-agrirequest',
  templateUrl: './agrirequest.page.html',
  styleUrls: ['./agrirequest.page.scss'],
})
export class AgrirequestPage implements OnInit {
  telephone_number:string="";
  data:any;
  nic:string;
  choose:string;
  nameini:string;
  TpNo:string;
  store:any;
  app_id:number;
  District:string;
  Agr_service_dev:string;
  GN_No:string;
  GN_Division:string;
  ao_status:string;
  ai_status:string;
  do_status:string;
  bank_status:string;
  crop:string;
  whatfor:string;
  variety:string;
  sizeof:string;

  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private camera: Camera,
    public actionSheetController: ActionSheetController,) { }

  ngOnInit() {
    this.do();
  }


  do(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('Your tel is',  val.nic);
     this.nic=val.nic;
    
     this.storage.get("applicationinfo").then((res)=>{

      this.store=res;

      this.app_id=this.store.id;
      console.log(this.app_id);
   
    

    this.http.get(AccessProviders.server+'/getapplicantdetails/'+this.app_id).map(res => res).subscribe((res:any)=>{ 
     //this.storage.set('store_nic',res);
     console.log(res);
       this.data=res;
       console.log(this.data);
         //this.nic=this.data[0].nic;
         this.nameini=res.message[0].nameini;
         this.choose=res.message[0].choose;
         this.TpNo=res.message[0].TpNo;
         this.crop=res.message[0].crop;
       //  this.whatfor=this.data.whatfor;
       
         console.log("NIC" ,this.data.nic);
        

        });
      });
    });



  }


  request(){
    
    this.storage.get("applicationinfo").then((res)=>{

      this.store=res;

      this.app_id=this.store.id;
      console.log(this.app_id);
    });
  


  let body={
    app_id:this.app_id,
    GN_No:this.GN_No,
    GN_Division:this.GN_Division,
    Agr_service_dev:this.Agr_service_dev,
    District:this.District,
    ao_status:"false",
    ai_status:"false",
    do_status:"false",
    bank_status:"false",
    variety:this.variety,
    sizeof:this.sizeof


  }

  this.acessPr.postrequest(body).subscribe((res:any)=>{
    console.log(res);
    this.router.navigate(['/farmer-profile']);
  },
  (err: any) => {
    console.log(err);
    //this.router.navigate(['/farmer-profile']);
  });


  }

}
