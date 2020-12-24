import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-doofficer',
  templateUrl: './doofficer.page.html',
  styleUrls: ['./doofficer.page.scss'],
})
export class DoofficerPage implements OnInit {
  nic:string;
  items:any;
  dat:any;
  name:string;
  GN_No:string;
  Agr_service_dev:string;
  unread:number;
  
  slider: any;
    slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
    };

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

  slideData = [
    { image: "/assets/img/d3.jpg" },
    { image: "/assets/img/d1.jpg" },
    { image: "/assets/img/d2.jpg" }
  ]

  ngOnInit() {
    this.call();
  }

  single_notification(unread:number) {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'You have '+this.unread+' Report requests',
      sound: '/assets/sound.mp3',
      data: { secret: 'key_data' }
    });
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  
  call(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('Your login det is',  val);
      this.nic=val.nic;
      console.log(this.nic);
     


    this.http.get(AccessProviders.server+'/getDODetails/'+this.nic).map(res => res).subscribe((res:any)=>{ 
      this.items=res.message;
      console.log("AO",this.items);
      this.name=this.items[0].name;
      this.GN_No=this.items[0].GN_No;
      this.Agr_service_dev=this.items[0].Agr_service_dev;

      this.http.get(AccessProviders.server+'/viewdo/'+this.Agr_service_dev).map(res => res).subscribe((res:any)=>{ 
        //this.items=res.message;
        //console.log(this.items);
        //console.log("AO",this.items);
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

    this.navCtrl.navigateRoot('/doofficerequest');
  }

  
  history(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_DOH',this.dat);
   
    this.storage.get("storage_DOH").then((res)=>{
      console.log(res);
    });

    this.navCtrl.navigateRoot('/dohistory');
  }



}
