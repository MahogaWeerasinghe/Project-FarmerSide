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
import { Location } from "@angular/common";
import * as moment from 'moment';

@Component({
  selector: 'app-agrirequestsenter',
  templateUrl: './agrirequestsenter.page.html',
  styleUrls: ['./agrirequestsenter.page.scss'],
})
export class AgrirequestsenterPage implements OnInit {
  public anArray:any[]=[];
  data:any;
  bname:string="";
  item:string="";
  choose:string="";
  nameini:string="";
  nic:string="";
  mem_id:string="";
  fert_id:string="";
  year:string="";
  season:string="";
  area:string="";
  crop_type:string="";
  quantity:string="";
  income:string="";
  rep_id:string="";
  bank_name:string="";
  b_amount:string="";
  ao_status:string="";
  sub:any;
  subse:string="";
  public photos:any;
  cameradata:string;
  base64Image:string;
  ao_id:string;
  ao_date:string;



  public addresses: any[] = [{
    id: 1,
    bank_name: '',
    b_amount: '',
   
    
  }];

  constructor( private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private home: Location) {
    }



    goTo(){
      console.log('this.anArray',this.anArray);
      this.data=true;
    }

    Add(){
      this.data=true;
      this.anArray.push(this.item);
      console.log(this.item);
      console.log(this.bname);
    }

  ngOnInit() {
    this.get();
    this.photos=[];


    this.storage.get('storage_XXX').then((val) => {
        this.ao_id=val.nic;
        console.log(this.ao_id);
    });
  
  }

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      bank_name: '',
      b_amount: '',
     
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }
  
  back(){
    this.home.back();
  }


  get(){
    
    this.storage.get('storage_id').then((val) => {


     console.log("get ",val);
     this.rep_id=val;

    this.http.get(AccessProviders.server+'/getpers/'+val).map(res => res).subscribe((res:any)=>{ 
      //this.storage.set('store_nic',res);
      console.log(res);
        this.data=res.message;
        console.log(this.data);
        this.choose=this.data[0].choose;
        this.nameini=this.data[0].nameini;
        this.nic=this.data[0].nic;
        console.log(this.choose);
       
     });
    });

    console.log(this.choose);
  }




  details(){
    
    this.http.get(AccessProviders.server+'/dltloans/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 

    });

    console.log(this.photos[0]);
    console.log(this.sub);

    for(let i=0;i<this.sub.length;i++){
        this.subse=this.subse+','+this.sub[i];
    }
    console.log(this.subse);
    
    let body={
      mem_id:this.mem_id,
      fert_id:this.fert_id,
      year:this.year,
      season:this.season,
      area:this.area,
      crop_type:this.crop_type,
      quantity:this.quantity,
      income:this.income,
      ao_status:"true",
      ao_photos:this.photos[0],
      subse:this.subse,
      ao_id:this.ao_id,
      ao_date:moment(this.ao_date).format('YYYY-MM-DD'),
      
    }

    this.acessPr.postagrirep(body,this.rep_id).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");

          console.log(this.addresses);
          for(let i=0;i<this.addresses.length;i++){
            let body={
              rep_id:this.rep_id,
              bank_name:this.addresses[i].bank_name,
              b_amount:this.addresses[i].b_amount
                  

            }
              
            this.acessPr.postagribank(body).subscribe((res:any)=>{
              if(res.status==true){
                  console.log("correct");        
        
              }else{
               
              }
          },(err=>{
          //
          }));

          this.router.navigate(['/agrirequests']);
              
          }

      }else{
       
      }
  },(err=>{
  
  }));

    console.log(body);

  }

  
  async agriofficerActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'choose Your media',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
         this.openCamera(this.photos);
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.openGallery(this.photos);
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteimages(this.photos);
          //console.log('Delete clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    await actionSheet.present();
  }
  
  
  

  openCamera(arr:any[]){
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true

    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.cameradata=imageData;
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
      arr.push(this.base64Image);
      //arr.reverse();
    }, (err) => {
      console.log(err);
    });
  }

  openGallery(arr:any[]){
    const options: CameraOptions = {
      quality: 20,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.cameradata=imageData;
   this.base64Image = 'data:image/jpeg;base64,' + imageData;
   arr.push(this.base64Image);
   //arr.reverse();
    }, (err) => {
      console.log(err);
    });
  }
  
  deleteimages(arr:any[]){
    arr.length=0;
  }



  

}

