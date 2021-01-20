import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,
  ) { }

  ngOnInit() {
    this.getdata();
  }


 
  
  getdata(){

    this.storage.get("storage_loanid").then((res)=>{
      console.log(res);
      
      this.http.get(AccessProviders.server+'/bankdetails/').map(res => res).subscribe(res=>{ 
        //this.items=res;
        console.log(res);
      });
      
    });

  
  }

 /* this.arr2=this.genera_info.split('.');
  for(this.i in this.arr2){
    console.log(this.arr2[this.i]);
  }*/


}
