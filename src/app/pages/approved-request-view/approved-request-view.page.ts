import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro2/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-approved-request-view',
  templateUrl: './approved-request-view.page.html',
  styleUrls: ['./approved-request-view.page.scss'],
})
export class ApprovedRequestViewPage implements OnInit {

  date:string="";
  nameini:string="";
  loan_id:string="";
  //nic:string="";
  items:any;
  dat:string="";
  app_id:string="";
  choose:string;

  data:Number;
 

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
  
      this.http.get(AccessProviders.server+'/getapproveDetailsbyappid2/'+this.app_id).map(res=>res).subscribe((res:any)=>{
        this.items=res.message;
        this.choose=res.message[0].choose;
        this.nameini=res.message[0].nameini;
        console.log('items are ', this.items);
      });
    });
  }

  viewApprovedPersonalInfo(){
    this.router.navigate(['/personal-details-view'])
  }

  viewApprovedApplicationForm(){
    this.router.navigate(['/application-form-view']);
  }

  viewApprovedAgricultureReport(){
    this.router.navigate(['/report']);
  }

  async obtain(){
    let confirm = await this.alertCtrl.create({
      header: 'Do you Approve this Application?',
      buttons:[
        {
          text: 'Yes',
        handler: () => {
          
          this.router.navigate(['/toobtain'])
        }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  async Reject(){
    let confirm = await this.alertCtrl.create({
      header: 'Do you Reject this Application?',
      buttons:[
        {
          text: 'Yes',
        handler: () => {
          
          this.data=2;
          this.storage.set('storage_reject', this.dat);
          //this.postApproveData(this.loan_id, this.appid);
          this.router.navigate(['/pending-reason']);
        }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
    
  }


}
