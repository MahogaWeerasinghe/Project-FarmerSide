import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  //server:string='http://localhost:8000';
  public items : any;
  i:any;
  data:any;
  dat:string="";
  bank_id:string;
  nic:string="";

  constructor( private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
    private alertCtrl: AlertController) {

      this.storage.get('storage_XXX').then((val) => {
        console.log('Your age is',  val.nic);
        this.nic=val.nic;
      });
      this.storage.get("storage_co").then((res)=>{
        console.log(res);
        this.bank_id=res;
        console.log("in constructor : "+this.bank_id);
        //console.log("bank id :"+bank_id);
        this.http.get(AccessProviders.server+'/getloans/'+this.bank_id).map(res => res).subscribe(res=>{ 
        this.items=res;
        console.log(this.bank_id);
        console.log(res);
        });

      });
      //console.log("out constructor : "+this.bank_id);
      //this.getdata(this.bank_id);

      

     }

     

    /* getdata(bank_id:string){
      
      console.log("bank id :"+bank_id);
      this.http.get(AccessProviders.server+'/getloans/'+bank_id).map(res => res).subscribe(res=>{ 
      //this.items=res;
      console.log(this.bank_id);
      console.log(res);
      });
    }*/



  ngOnInit() {
  }

  
  ViewLoandetails(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_lo',this.dat);
   
    this.storage.get("storage_lo").then((res)=>{
      console.log(res);
    });

    this.navCtrl.navigateRoot('/loandetails');
  }




  applyloan(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_app',this.dat);

    this.http.get(AccessProviders.server+'/getdetails/'+this.nic).map(res => res).subscribe(res=>{ 
      //this.storage.set('storage2',res);
          console.log(res);
          if(res==null){
            this.navCtrl.navigateRoot('/edit');

          }

          else{
            this.navCtrl.navigateRoot('/application');
          }

    });
  }
}
