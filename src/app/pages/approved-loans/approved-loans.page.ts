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

  constructor(
    private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
  ) { }

  ngOnInit() {

    this.storage.get('storage_XXX').then((val) => {
      console.log('Your tel is',  val.telephone_number);
     this.telephone_number=val.telephone_number;

     this.http.get(AccessProviders.server+'/getdetails/'+this.telephone_number).map(res => res).subscribe(res=>{ 
      //this.storage.set('store_nic',res);
      console.log(res);
        this.data=res;
        console.log(this.data);
          this.nic=this.data.nic;
          console.log("NIC" ,this.data.nic);

          this.http.get(AccessProviders.server+'/showapproveloan/'+this.nic).map(res => res).subscribe((res:any)=>{ 
            //this.storage.set('store_nic',res);
            console.log(res);
            this.items=res.message;
    
         
       
             });
     
     });



    });
  }

  
  
  showaction(event){
    this.hidecongrats=false;
  this.hidedet=true;

  
  console.log(event.target.id);
  this.dat=event.target.id;
  console.log(this.dat);
  this.storage.set('storage_approveappid',this.dat);
 
  this.storage.get("storage_approveappid").then((res)=>{
    console.log(res);

    

 


   
 /* this.http.get(AccessProviders.server+'/showrejectloandata/'+res).map(res => res).subscribe((res:any)=>{ 
    //this.storage.set('store_nic',res);
    console.log(res);
    this.items=res.message;

    
 

    });*/


  });

  this.navCtrl.navigateRoot('/approveddetails');

  }

}
