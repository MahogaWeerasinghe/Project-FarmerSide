import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-aiofficer',
  templateUrl: './aiofficer.page.html',
  styleUrls: ['./aiofficer.page.scss'],
})
export class AiofficerPage implements OnInit {
  nic:string;
  items:any;
  name:string="";
  dat:any;
  GN_No:string="";
  unread:number;

  slideData = [
    { image: "/assets/img/i2.jpg" },
    { image: "/assets/img/i1.jpg" },
    { image: "/assets/img/i3.jpg" }
  ]
  
  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
    this.call();
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  single_notification(unread:number) {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'You have '+this.unread+' Estimate requests',
      sound: '/assets/sound.mp3',
      data: { secret: 'key_data' }
    });
  }



  call(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('Your login det is',  val);
      this.nic=val.nic;
      console.log(this.nic);
     


    this.http.get(AccessProviders.server+'/getAIDetails/'+this.nic).map(res => res).subscribe((res:any)=>{ 
      this.items=res.message;
      console.log("AO",this.items);
      this.name=this.items[0].name;
      this.GN_No=this.items[0].GN_No;


      this.http.get(AccessProviders.server+'/viewai/'+this.GN_No).map(res => res).subscribe((res:any)=>{ 
       // this.items=res.message;
       // console.log("AO",this.items);
        this.unread=res.message.length;
        console.log(res.message);
        if(this.unread!=0){
          this.single_notification(this.unread);
        }
      });
  
    });

  });


  }

  requests(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_gn',this.dat);
   
    this.storage.get("storage_gn").then((res)=>{
      console.log(res);
    });

    this.navCtrl.navigateRoot('/airequest');
  }


  history(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_AIH',this.dat);
   
    this.storage.get("storage_AIH").then((res)=>{
      console.log(res);
    });

    this.navCtrl.navigateRoot('/aihistory');
  }






  

}
