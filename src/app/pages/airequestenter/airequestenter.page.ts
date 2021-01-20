import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import * as moment from 'moment';


@Component({
  selector: 'app-airequestenter',
  templateUrl: './airequestenter.page.html',
  styleUrls: ['./airequestenter.page.scss'],
})
export class AirequestenterPage implements OnInit {
  choose:string;
  nameini:string;
  data:any;
  nic:string;
  mem_id:string;
  size:string;
  es_amount:string;
  ai_id:string;
  ai_status:string;
  rep_id:string="";
  app_id:string;
  ai_date:string;

  public photos:any;
  cameradata:string;
  base64Image:string;

  forclean:number;
  forland:number;
  forseed:number;
  forfertilizer:number;
  forchemicals:number;
  forharvest:number;
  others:number;
  totalamount:number;

  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
    this.call();
    this.photos=[];

    this.storage.get('storage_XXX').then((val) => {
      this.ai_id=val.nic;
      console.log(this.ai_id);
  });

  
  }

  call(){
    this.storage.get("storage_id").then((res)=>{
      console.log(res);
      this.rep_id=res;
      this.http.get(AccessProviders.server+'/getpers/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
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
    });


  }
  details(){
    this.totalamount=this.forclean+this.forland+this.forseed+this.forfertilizer+this.forchemicals+this.forharvest+this.others;
    console.log(this.totalamount);
    
   
    
    let body={
      //size:this.size,
      es_amount:this.es_amount,
      ai_status:"true",
      ai_id:this.ai_id,
      ai_date:moment(this.ai_date).format('YYYY-MM-DD'),
      ai_photos:this.photos[0],

    }

    this.acessPr.postagrirep(body,this.rep_id).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");

          let body={
            rep_id:this.rep_id,
            forclean:this.forclean,
            forland:this.forland,
            forseed:this.forseed,
            forfertilizer:this.forfertilizer,
            forchemicals:this.forchemicals,
            forharvest:this.forharvest,
            forothers:this.others,
            totalamount:this.totalamount
          }
      
          this.acessPr.postagriestimate(body).subscribe((res:any)=>{
            if(res.status==true){
                console.log("correct");
      

            }else{
             
            }
        },(err=>{
        
        }));
  

          this.router.navigate(['/airequest']);
              
          

      }else{
       
      }
  },(err=>{
  
  }));

  }

  location(){
    this.storage.set('storage_location',this.app_id);
    this.router.navigate(['/location']);
  }



  async agriinstructorActionSheet(){
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
