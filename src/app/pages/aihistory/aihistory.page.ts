import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';


@Component({
  selector: 'app-aihistory',
  templateUrl: './aihistory.page.html',
  styleUrls: ['./aihistory.page.scss'],
})
export class AihistoryPage implements OnInit {
  ai_id:string;
  items:any;
  dat:any;

  constructor(private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,) { }

  ngOnInit() {
    this.call();
  }
  call(){
    this.storage.get("storage_AIH").then((res)=>{
      console.log(res);
      this.ai_id=res;

      console.log(this.ai_id);

      this.http.get(AccessProviders.server+'/viewaihis/'+this.ai_id).map(res => res).subscribe((res:any)=>{ 
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

    this.navCtrl.navigateRoot('/aihistorydetails');
  }

}
