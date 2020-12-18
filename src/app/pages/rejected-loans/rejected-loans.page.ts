import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';


@Component({
  selector: 'app-rejected-loans',
  templateUrl: './rejected-loans.page.html',
  styleUrls: ['./rejected-loans.page.scss'],
})
export class RejectedLoansPage implements OnInit {
  telephone_number:any="";
  data:any;
  nic:string="";
  loan_id:string="";
  id:string="";
  dat:number;
  public items : any;

  hidecongrats=true;
  hidedet=false;
  hide2=false;

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

  ngOnInit() {
    this.hidecongrats=true;
  this.hidedet=false;
    this.storage.get('storage_XXX').then((val) => {
      console.log('Your tel is',  val.nic);
     this.nic=val.nic;

  
     
       console.log("nic is ",this.nic);
       this.http.get(AccessProviders.server+'/showrejectloan/'+this.nic).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
        this.items=res.message;

        if(res.message.length==0){
          this.hide2=true;
        }
          //this.data=res;
          //console.log(this.data);
            //this.nic=this.data.nic;
            //console.log("NIC" ,this.data.nic);
            //this.loan_id = this.data.loan_id;
            //this.id=this.data.id;
   
         });
      







    });



  }

  

  showaction(event){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);

  

  this.storage.set('storage_appid',	this.dat);
  //this.storage.set('storage_approveappid',this.approve_id);

  this.storage.get("storage_appid").then((res)=>{
    console.log(res);

  });

    

 
    this.navCtrl.navigateRoot('/rejecteddetails');

   
  /*this.http.get(AccessProviders.server+'/showrejectloandata/'+res).map(res => res).subscribe((res:any)=>{ 
    //this.storage.set('store_nic',res);
    console.log(res);
    this.items=res.message;

    
 

    });
  });*/

  }

}
