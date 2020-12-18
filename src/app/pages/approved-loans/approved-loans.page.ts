import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';


@Component({
  selector: 'app-approved-loans',
  templateUrl: './approved-loans.page.html',
  styleUrls: ['./approved-loans.page.scss'],
})
export class ApprovedLoansPage implements OnInit {
  hidecongrats=true;
  hidedet=false;

  telephone_number:any="";
  data:any;
  nic:string="";
  loan_id:string="";
  id:string="";
  dat:number;
  public items : any;
  application_id:number;
  approve_id:number;
  loan_name:string;
  approved_date:string;

  hide2=false;

  constructor(
    private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
  ) { }

  ngOnInit() {

   this.storage.get('storage_XXX').then((val) => {
      console.log('Your tel is',  val.nic);
     this.nic=val.nic;


          this.http.get(AccessProviders.server+'/showapproveloan/'+this.nic).map(res => res).subscribe((res:any)=>{ 
            //this.storage.set('store_nic',res);
            console.log(res);
            this.items=res.message;

            if(res.message.length==0){
              this.hide2=true;
              console.log("hii");
            }
            this.loan_name=res.message[0].loan_name;
        
            this.approved_date=res.message[0].approved_date;
            this.application_id=res.message[0].application_id;
            this.approve_id=res.message[0].approve_id;
            
             
       
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
  this.navCtrl.navigateRoot('/approveddetails');
 
}

}
