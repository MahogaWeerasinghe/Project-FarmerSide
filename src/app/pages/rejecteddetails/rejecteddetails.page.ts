import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-rejecteddetails',
  templateUrl: './rejecteddetails.page.html',
  styleUrls: ['./rejecteddetails.page.scss'],
})
export class RejecteddetailsPage implements OnInit {
  telephone_number:any="";
  data:any;
  nic:string="";
  loan_id:string="";
  id:string="";
  dat:number;
  public items : any;


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
 
     
       console.log("nic is ",this.nic);
       this.http.get(AccessProviders.server+'/showrejectloan/'+this.nic).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
        this.items=res.message;

        
          //this.data=res;
          //console.log(this.data);
            //this.nic=this.data.nic;
            //console.log("NIC" ,this.data.nic);
            //this.loan_id = this.data.loan_id;
            //this.id=this.data.id;
   
         });
        });







    });

    this.storage.get("storage_rejeappid").then((res)=>{
      console.log(res);
  
  
    this.http.get(AccessProviders.server+'/showrejectloandata/'+res).map(res => res).subscribe((res:any)=>{ 
      //this.storage.set('store_nic',res);
      console.log(res);
      this.items=res.message;
  
      
   
  
      });
    });


  }

}
