import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';

@Component({
  selector: 'app-demobanks',
  templateUrl: './demobanks.page.html',
  styleUrls: ['./demobanks.page.scss'],
})
export class DemobanksPage implements OnInit {
  public items : any;
  i:any;
  data:any;
  dat:string="";

  log:string;

  constructor(private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.http.get(AccessProviders.server+'/bankdetails').map(res => res).subscribe(res=>{ 
      this.items=res;
      console.log(res);
    });
  }

  ViewLoans(){
    this.presentToast("Please Login First..");
    this.router.navigate(['/login']);

  }

  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'top'
    });
  toast.present();
  }
}
