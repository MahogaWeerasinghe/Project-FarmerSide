import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AccessProviders } from '../../pro2/access';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-personal-details-view',
  templateUrl: './personal-details-view.page.html',
  styleUrls: ['./personal-details-view.page.scss'],
})
export class PersonalDetailsViewPage implements OnInit {

  appid:string="";
  items:any;

  choose:string="";
  nameini:string="";
  namefull:string="";
  address:string="";
  TpNo:string="";
  dob:string="";
  nic:string="";

  constructor(
    public storage: Storage,
    private accessPr: AccessProviders,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.appid=val;

      console.log(this.appid);
      this.http.get(AccessProviders.server+'/getFarmerDetails2/'+this.appid).map(res=>res).subscribe((res:any)=>{
        console.log(res);
        this.items=res.message;
        console.log(this.items);
      });
    });
  }

}
