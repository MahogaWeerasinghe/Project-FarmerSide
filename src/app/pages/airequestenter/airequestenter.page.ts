import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';


@Component({
  selector: 'app-airequestenter',
  templateUrl: './airequestenter.page.html',
  styleUrls: ['./airequestenter.page.scss'],
})
export class AirequestenterPage implements OnInit {
  choose:string;
  nameini:string;
  data:any;
  nic:string;
  mem_id:string;
  size:string;
  es_amount:string;
  ai_id:string;
  ai_status:string;
  rep_id:string="";
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

    this.storage.get('storage_XXX').then((val) => {
      this.ai_id=val.nic;
      console.log(this.ai_id);
  });

  }

  call(){
    this.storage.get("storage_id").then((res)=>{
      console.log(res);
      this.rep_id=res;
      this.http.get(AccessProviders.server+'/getpers/'+this.rep_id).map(res => res).subscribe((res:any)=>{ 
        //this.storage.set('store_nic',res);
        console.log(res);
          this.data=res.message;
          console.log(this.data);
          this.choose=this.data[0].choose;
          this.nameini=this.data[0].nameini;
          this.nic=this.data[0].nic;
          this.mem_id=this.data[0].mem_id;
          console.log(this.choose);
         
       });
    });


  }
  details(){
    let body={
      size:this.size,
      es_amount:this.es_amount,
      ai_status:"true",
      ai_id:this.ai_id
     

    }

    this.acessPr.postagrirep(body,this.rep_id).subscribe((res:any)=>{
      if(res.status==true){
          console.log("correct");

         
      

          this.router.navigate(['/airequest']);
              
          

      }else{
       
      }
  },(err=>{
  
  }));

  }

}
