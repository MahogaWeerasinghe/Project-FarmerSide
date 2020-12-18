import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
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
   this.call();

  }

  call(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('Your nic is',  val.nic);
     this.nic=val.nic;



     
   

    console.log(this.nic);

    this.http.get(AccessProviders.server+'/showpayments/'+this.nic).map(res => res).subscribe((res:any)=>{ 
      //this.storage.set('store_nic',res);
      console.log(res.message);
      this.items=res.message;

      
        //this.data=res;
        //console.log(this.data);
          //this.nic=this.data.nic;
          //console.log("NIC" ,this.data.nic);
          //this.loan_id = this.data.loan_id;
          //this.id=this.data.id;
        });
 
       });
     
    

  }

  showpayments(event){
  
    
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_payid',this.dat);
   
    this.storage.get("storage_payid").then((res)=>{
      console.log(res);

  });

  this.navCtrl.navigateRoot('/paymentdetails');
}

}
