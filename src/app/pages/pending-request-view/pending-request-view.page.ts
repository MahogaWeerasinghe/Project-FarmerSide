import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro2/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';


@Component({
  selector: 'app-pending-request-view',
  templateUrl: './pending-request-view.page.html',
  styleUrls: ['./pending-request-view.page.scss'],
})
export class PendingRequestViewPage implements OnInit {
data:any;
app_id:number;
  constructor(private router: Router,
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,
    public actionSheetController: ActionSheetController,
    public alertCtrl:AlertController,) { }

  ngOnInit() {
    this.storage.get("storage_appid").then((res)=>{
      console.log(res);
      this.app_id=res;
  
      this.http.get(AccessProviders.server+'/getrejectDetailsbyappid2/'+this.app_id).map(res=>res).subscribe((res:any)=>{
        this.data=res.message;
        //this.choose=res.message[0].choose;
        //this.nameini=res.message[0].nameini;
        console.log('items are ', this.data);
      });
    });
  }

  viewPendingPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewPendingApplicationForm(){
    this.router.navigate(['/application-form-view']);
  }

  viewAgriForm(){
    this.router.navigate(['/report']);
  }

  

}
