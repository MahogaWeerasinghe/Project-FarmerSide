import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';

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
  ) { }

  slideData = [
    { image: "/assets/img/d3.jpg" },
    { image: "/assets/img/d1.jpg" },
    { image: "/assets/img/d2.jpg" }
  ]

  ngOnInit() {
    this.call();
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
