import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';

@Component({
  selector: 'app-agrirequests',
  templateUrl: './agrirequests.page.html',
  styleUrls: ['./agrirequests.page.scss'],
})
export class AgrirequestsPage implements OnInit {
  GN_No:string="";
  items:any;
  name:string;
  nic:string;
  dat:any;
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

      doRefresh(event:any) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        this.call();
        //console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

  ngOnInit() {
    this.call();
  }

  call(){
    this.storage.get("storage_gn").then((res)=>{
      console.log(res);
      this.GN_No=res;

      this.http.get(AccessProviders.server+'/viewagri/'+this.GN_No).map(res => res).subscribe((res:any)=>{ 
        this.items=res.message;
        //console.log("AO",this.items);
      });
  

    });

  }

  details(event){
    
      console.log(event.target.id);
      this.dat=event.target.id;
      console.log(this.dat);
      this.storage.set('storage_id',this.dat);
     
      this.storage.get("storage_id").then((res)=>{
        console.log(res);
      });
  
      this.router.navigate(['/agrirequestsenter']);
    }
    
  


  
}
