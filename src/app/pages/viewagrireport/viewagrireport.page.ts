import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';


@Component({
  selector: 'app-viewagrireport',
  templateUrl: './viewagrireport.page.html',
  styleUrls: ['./viewagrireport.page.scss'],
})
export class ViewagrireportPage implements OnInit {
  rep_id:string="";
  items:any;
  data:any;
  constructor(
    private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.storage.get('storage_repiddet').then((res)=>{
      console.log(res);
      
      this.rep_id=res;
      
      console.log("rep_id",this.rep_id);

      this.http.get(AccessProviders.server+'/showAR/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
        console.log(res);
        this.items=res.message;

  
      
    });

    
    this.http.get(AccessProviders.server+'/showARloans/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
      console.log(res);
      this.data=res.message;


    
  });

    });
  }

}
