import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';
import { Location } from "@angular/common";



@Component({
  selector: 'app-viewstatusdetails',
  templateUrl: './viewstatusdetails.page.html',
  styleUrls: ['./viewstatusdetails.page.scss'],
})
export class ViewstatusdetailsPage implements OnInit {
  rep_id:string="";
  aodetails:any;
  ao:string;
  aidetails:any;
  ai:string;
  dodetails:any;
  do:string;
  hide=false;
  hide1=true;
  hide2=false;
  hide3=true;
  hide4=false;
  hide5=true;
  hide6=false;

  dat:any;
  constructor(
    private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
    private home: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  back(){
    this.home.back();
  }

  get(){
    this.storage.get('storage_repid').then((res)=>{

      console.log(res);
      
      this.rep_id=res;
      
      console.log("rep_id",this.rep_id);


      this.http.get(AccessProviders.server+'/showAO/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
          console.log(res);
          this.aodetails=res.message;

          if(res.message[0].ao_status=="true"){
              //this.ao="Pending";
              this.hide1=false
              this.hide2=true;
          }
        
      });


      this.http.get(AccessProviders.server+'/showAI/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
        console.log(res);
        this.aidetails=res.message;

        if(res.message[0].ai_status=="true"){
          //this.ao="Pending";
          this.hide3=false
          this.hide4=true;
      }
    });

    
    this.http.get(AccessProviders.server+'/showDO/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
      console.log(res);
      this.dodetails=res.message;

      if(res.message[0].do_status=="true"){
        //this.ao="Pending";
        this.hide5=false
        this.hide6=true;
    }

      if(res.message[0].do_status=="true" && res.message[0].ai_status=="true" && res.message[0].ao_status=="true" && res.message[0].bank_status=="false"){
        this.hide=true;
      }
  });

  });


  }

  showao(event){
  
    
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_id',this.dat);
   
    this.storage.get("storage_id").then((res)=>{
      console.log(res);

  });

  this.navCtrl.navigateRoot('/agrihistorydetails');
}

showai(event){
  
    
  console.log(event.target.id);
  this.dat=event.target.id;
  console.log(this.dat);
  this.storage.set('storage_id',this.dat);
 
  this.storage.get("storage_id").then((res)=>{
    console.log(res);

});

this.navCtrl.navigateRoot('/aihistorydetails');
}

showdo(event){
  
    
  console.log(event.target.id);
  this.dat=event.target.id;
  console.log(this.dat);
  this.storage.set('storage_id',this.dat);
 
  this.storage.get("storage_id").then((res)=>{
    console.log(res);

});

this.navCtrl.navigateRoot('/dohistorydetails');
}
  

}
