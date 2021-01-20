import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.page.html',
  styleUrls: ['./crop.page.scss'],
})
export class CropPage implements OnInit {
 // server:string='http://localhost:8000';
  public items : any;
  i:any;
  data:any;
  dat:string="";

  log:string;
  //event:any;
  constructor(
    private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
  ) {
    this.getdata();
   }

  getdata(){
    this.http.get(AccessProviders.server+'/bankdetails').map(res => res).subscribe(res=>{ 
      this.items=res;
      console.log(res);
    });
  }

 
    ViewLoans(event:any){
      this.storage.get('storage_XXX').then((val) => {
        this.log=val.nic;
        
      });

      console.log(event.target.id);
      this.dat=event.target.id;
      console.log(this.dat);
      this.storage.set('storage_co',this.dat);
     
      this.storage.get("storage_co").then((res)=>{
        console.log(res);
      });

      this.navCtrl.navigateRoot('/loans');
    }
  ngOnInit() {
  }


}
