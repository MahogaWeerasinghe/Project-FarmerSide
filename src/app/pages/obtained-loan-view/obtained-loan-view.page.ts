import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro2/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-obtained-loan-view',
  templateUrl: './obtained-loan-view.page.html',
  styleUrls: ['./obtained-loan-view.page.scss'],
})
export class ObtainedLoanViewPage implements OnInit {

  appid:string="";
  items:any[];
  loan_id:string="";
  dat:any;
  choose:string="";
  nameini:string="";
  app_id:number;

  data:any;
  constructor(private router: Router,
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,
    public actionSheetController: ActionSheetController,
    public alertCtrl:AlertController,
  ) { }

  ngOnInit() {
    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
      this.app_id=res;
  
      this.http.get(AccessProviders.server+'/getobtaineddetailsbyappid2/'+this.app_id).map(res=>res).subscribe((res:any)=>{
        this.data=res.message;
        this.choose=res.message[0].choose;
        this.nameini=res.message[0].nameini;
        console.log('items are ', this.data);
      });
    });

  }

  viewObtainedPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewObatainedApplicationForm(){
    this.router.navigate(['/application-form-view']);
  }

  viewAgriForm(){
    this.router.navigate(['/report']);
  }

  viewpayemet(event:any){
    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set("storage_obtainid", this.dat);

    this.storage.get("storage_obtainid").then((res)=>{
      console.log(res);
    });

    this.router.navigate(['/payment-details']);
  }

}
