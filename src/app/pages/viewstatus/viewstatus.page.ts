import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.page.html',
  styleUrls: ['./viewstatus.page.scss'],
})
export class ViewstatusPage implements OnInit {
  nic:string;
  items:any;
  dat:any;
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
    this.storage.get('storage_XXX').then((res)=>{

      
      
        this.nic=res.nic;
        
        console.log("nic",this.nic);


        this.http.get(AccessProviders.server+'/showstatus/'+this.nic).map(res => res).subscribe((res:any)=>{ 
            console.log(res);
            this.items=res.message;
        });

    });

 

  }


  showstatus(event){
  
    
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_repid',this.dat);
   
    this.storage.get("storage_repid").then((res)=>{
      console.log(res);

  });

  this.navCtrl.navigateRoot('/viewstatusdetails');
}


  
}
