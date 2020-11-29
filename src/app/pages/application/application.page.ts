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

import * as moment from 'moment';

//import { Console } from 'console';

@Injectable({
  providedIn: 'root' // just before your class
})

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  
  server:string='http://localhost:8000';
  public items : any;
  i:any;
  data:any;
  dat:string="";
  bank_id:string;
  telephone_number:string="";
  nic:string="";
  loan_id:string="";
  store:any;
  selectTabs;
  appid:string="";

  public photos:any;
  public repo:any;
  public fix:any;
  public mot:any;
  public gu1:any;
  public gua2:any;

  public type:string;



  cameradata:string;
  base64Image:string

  B1name:string="";
  B1branch:string="";
  B1accountno:string="";
  B1type:string="";

  B2name:string="";
  B2branch:string="";
  B2accountno:string="";
  B2type:string="";

  B3name:string="";
  B3branch:string="";
  B3accountno:string="";
  B3type:string="";

  date:string="";
  crop:string="";
  whatfor:string="";
  reason:string="";
  amount:number;
  months:number;
  civil:string="";
  spousename:string="";
  spo_emplo:string="";
  children:number;
  fix_name:string="";
  fix_deed:string="";
  fix_size:number;
  fix_value:number;
  mot_about:string="";
  mot_location:string="";
  mot_value:number;
  gua1_name:string="";
  gua1_occ:string="";
  gua1_tp:string="";
  gua2_name:string="";
  gua2_occ:string="";
  gua2_tp:string="";
  hide=false;
  i1:any;
  i2:any;
  addr:any;

  
  disableButton;

  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private camera: Camera,
    public actionSheetController: ActionSheetController,) { 
      this.selectTabs="want";
      
    this.storage.get("storage_app").then((res)=>{
      console.log("loan id",res);
      this.loan_id=res;



      this.http.get(AccessProviders.server+'/getloandetails/'+this.loan_id).map(res => res).subscribe(res=>{ 
        //this.storage.set('store_nic',res);
           this.data=res;
  
             this.loan_id=this.data.loan_id;
             
         });
   

    this.storage.get('storage_XXX').then((val) => {
      console.log('Your tel is',  val.telephone_number);
     this.telephone_number=val.telephone_number;
    

    

    this.http.get(AccessProviders.server+'/getdetails/'+this.telephone_number).map(res => res).subscribe(res=>{ 
     //this.storage.set('store_nic',res);
     console.log(res);
       this.data=res;
       console.log(this.data);
         this.nic=this.data.nic;
         console.log("NIC" ,this.data.nic);

      });
    });
  });
  

  if(this.loan_id=="L01"){
    this.hide=false;
  }

  else{
    this.hide=true;
  }
          
  }

  

  ngOnInit() {
    this.photos=[];
    this.repo=[];
    this.fix=[];
    this.mot=[];
    this.gu1=[];
    this.gua2=[];
  }
  
  async submitapp(){
      console.log(this.nic);
      console.log(this.B1name);
      console.log(this.B2name);
      console.log(this.B3name);
    
      if(this.B1name!=""){
      let body ={
        nic :this.nic,
        bank_name : this.B1name,
        branch : this.B1branch,
        accountno : this.B1accountno,
        type : this.B1type,
  
  
      }
  
      this.acessPr.postaccount(body).subscribe((res:any)=>{
        console.log(res);
      },
      (err: any) => {
        console.log(err);
        
      });
  }

        
  if(this.B2name!=""){
    let body ={
      nic :this.nic,
      bank_name : this.B2name,
      branch : this.B2branch,
      accountno : this.B2accountno,
      type : this.B2type,


    }

    this.acessPr.postaccount(body).subscribe((res:any)=>{
      console.log(res);
    },
    (err: any) => {
      console.log(err);
      
    });
}

    
if(this.B3name!=""){
  let body ={
    nic :this.nic,
    bank_name : this.B3name,
    branch : this.B3branch,
    accountno : this.B3accountno,
    type : this.B3type,


  }

  this.acessPr.postaccount(body).subscribe((res:any)=>{
    console.log(res);
  },
  (err: any) => {
    console.log(err);
    
  });
}

    console.log("agrii",this.photos);
    console.log("income",this.repo);
    console.log("NIC" ,this.nic);
    console.log("NIC" ,this.loan_id);
    console.log(this.crop);
    console.log(this.date);
    console.log(this.date);
    console.log(this.date);
    console.log(this.date);
    if(this.date==""){
      this.presentToast("Date is required");
  }else if(this.crop==""){
    this.presentToast("crop is required");
  }else if(this.reason=="")
  {
    this.presentToast("reason is required");
  }
  else{
    this.disableButton=true;
    const loader=await this.loadingCtrl.create({
        message:'Please wait......',
    });
    loader.present();
      return new Promise(resoler=>{
        let body={
          loan_id:this.loan_id,
          nic:this.nic,
          date:moment(this.date).format('YYYY-MM-DD'),
          crop:this.crop,
          whatfor:this.whatfor,
          reason:this.reason,
          amount:this.amount,
          months:this.months,
          civil:this.civil,
          spousename:this.spousename,
          spo_emplo:this.spo_emplo,
          children:this.children,
          fix_name:this.fix_name,
          latitude:this.i1,
          longitude:this.i2,
          address:this.addr,
          fix_deed:this.fix_deed,
          fix_size:this.fix_size,
          fix_value:this.fix_value,
          mot_about:this.mot_about,
          mot_location:this.mot_location,
          mot_value:this.mot_value,
          gua1_name:this.gua1_name,
          gua1_occ:this.gua1_occ,
          gua1_tp:this.gua1_tp,
          gua2_name:this.gua2_name,
          gua2_occ:this.gua2_occ,
          gua2_tp:this.gua2_tp,
      
                
        }
        this.acessPr.postSubmit(body).subscribe((res:any)=>{
            if(res.status==true){
              loader.dismiss();
              this.disableButton=false;
              console.log("before set",res);
              this.storage.set("applicationinfo",res.data);
              this.presentToast(res.message);
              //this.router.navigate(['/farmer-profile']);

              this.storage.get("applicationinfo").then((res)=>{
  
                this.store=res;
                this.appid=this.store.id + 1;
                
                console.log(this.appid);
                if(this.photos!=null){
                    this.type="agri";
                    for(let i=0;i<this.photos.length;i++){
                      console.log(this.photos[i]);
                      console.log(this.appid);
                      let body ={
                        app_id:this.appid,
                        agr_images:this.photos[i],
                        type:this.type
                      }
                    
                      this.acessPr.postagri(body).subscribe((res:any)=>{
                        console.log(res);
                      },
                      (err: any) => {
                        console.log(err);
                        
                      });
                    
                    }
                }

                if(this.repo!=null){
                  this.type="repo";
                  for(let i=0;i<this.repo.length;i++){
                    console.log(this.repo[i]);
                    console.log(this.appid);
                    let body ={
                      app_id:this.appid,
                      agr_images:this.repo[i],
                      type:this.type
                  
                    }
                  
                    this.acessPr.postagri(body).subscribe((res:any)=>{
                      console.log(res);
                    },
                    (err: any) => {
                      console.log(err);
                      
                    });
                  
                  }
              }

              if(this.fix!=null){
                this.type="fix";
                for(let i=0;i<this.fix.length;i++){
                  console.log(this.fix[i]);
                  console.log(this.appid);
                  let body ={
                    app_id:this.appid,
                    agr_images:this.fix[i],
                    type:this.type
                
                  }
                
                  this.acessPr.postagri(body).subscribe((res:any)=>{
                    console.log(res);
                  },
                  (err: any) => {
                    console.log(err);
                    
                  });
                
                }
            }

            if(this.mot!=null){
              this.type="mot";
              for(let i=0;i<this.mot.length;i++){
                console.log(this.mot[i]);
                console.log(this.appid);
                let body ={
                  app_id:this.appid,
                  agr_images:this.mot[i],
                  type:this.type
              
                }
              
                this.acessPr.postagri(body).subscribe((res:any)=>{
                  console.log(res);
                },
                (err: any) => {
                  console.log(err);
                  
                });
              
              }
          }

          if(this.gu1!=null){
            this.type="gu1";
            for(let i=0;i<this.gu1.length;i++){
              console.log(this.gu1[i]);
              console.log(this.appid);
              let body ={
                app_id:this.appid,
                agr_images:this.gu1[i],
                type:this.type
            
              }
            
              this.acessPr.postagri(body).subscribe((res:any)=>{
                console.log(res);
              },
              (err: any) => {
                console.log(err);
                
              });
            
            }
        }

        if(this.gua2!=null){
          this.type="gua2";
          for(let i=0;i<this.gua2.length;i++){
            console.log(this.gua2[i]);
            console.log(this.appid);
            let body ={
              app_id:this.appid,
              agr_images:this.gua2[i],
              type:this.type
          
            }
          
            this.acessPr.postagri(body).subscribe((res:any)=>{
              console.log(res);
            },
            (err: any) => {
              console.log(err);
              
            });
          
          }
      }

      this.http.get(AccessProviders.server+'/insertagain/'+this.loan_id+'/'+this.appid+'/'+this.nic+'/'+this.date).map(res => res).subscribe((res:any)=>{ 
          console.log(this.loan_id);
          console.log(this.appid);
          console.log(this.nic);
          console.log(this.date);


      });






                
        
        
          });

            }else{
              loader.dismiss();
              this.disableButton=false;
              this.presentToast(res.message);
            }
        },(err=>{
          loader.dismiss();
          this.disableButton=false;
          this.presentAlert('Timeout');
        }));
      });

      

    
  }










}
  //console.log(telephone_number);
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'top'
    });
  toast.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
     backdropDismiss:false,
      header: a,
      
      buttons: [
        {
          text: 'close',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Try Again',
          handler: () => {
           this.submitapp()
          }
        }
      ]
    });

    await alert.present();
  }

  location(){
    this.router.navigate(['/gmap']);
  }

  addlocation(){

    this.storage.get('storage_location').then((res)=>{
      console.log(res);
      this.i1=res.t1;
      this.i2=res.t2;
      this.addr=res.t3;
      //this.name=this.datastorage.Name;
      console.log(this.i1);
    });
  }

 /* attachagrireports(){
  
      const fileTransfer: FileTransferObject = this.transfer.create();
      let options: FileUploadOptions = {
      //The name of the form element.(optional)
      fileKey: ‘file’,
      
      //The file name to use when saving the file on the server(optional)
      fileName: ‘name.pdf’,  
      headers: {}
      
      }
      fileTransfer.upload('url of your file', 'target url', options)
      .then((data) => {
      // success
      }, (err) => {
      // error
      })
     
  }*/


  async AgrireportActionSheet() {
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
  add(){
    let body={
      images:this.cameradata
    };
  
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

  async incomereportActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'choose Your media',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
         this.openCamera(this.repo);
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.openGallery(this.repo);
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          //console.log('Delete clicked');
          this.deleteimages(this.repo);
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


  async fixeddocumentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'choose Your media',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
         this.openCamera(this.fix);
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.openGallery(this.fix);
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          //console.log('Delete clicked');
          this.deleteimages(this.fix);
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


  async motivedocumentsActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'choose Your media',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
         this.openCamera(this.mot);
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.openGallery(this.mot);
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          //console.log('Delete clicked');
          this.deleteimages(this.mot);
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


  async gua1ActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'choose Your media',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
         this.openCamera(this.gu1);
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.openGallery(this.gu1);
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          //console.log('Delete clicked');
          this.deleteimages(this.gu1);
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


  async gua2ActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'choose Your media',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
         this.openCamera(this.gua2);
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.openGallery(this.gua2);
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          //console.log('Delete clicked');
          this.deleteimages(this.gua2);
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
  

  deleteimages(arr:any[]){
    arr.length=0;
  }

  

}
