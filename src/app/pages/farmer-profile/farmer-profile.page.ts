import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.page.html',
  styleUrls: ['./farmer-profile.page.scss'],
})
export class FarmerProfilePage implements OnInit {
  public segment: string = "list1";



  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  username:string="";
  datastore:any;
  server:string='http://localhost:8000';
  telephone_number:string="";
 data:any;

 choose:string="";
 nameini:string="";
 namefull:string="";
 address :string="";
 TpNo :string="";
 dob:string="";
 nic:string="";

  
  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private acessPr:AccessProviders,)  { 
     
  this.storage.get('storage_XXX').then((res)=>{
 // console.log('Your name is',  res.username);
  this.username=res.username;
  //console.log('Your name is',  this.username);

    //console.log(res);
    //this.datastore=res;
    this.telephone_number=res.telephone_number;
    //console.log(this.telephone_number);
   
    
  this.http.get(this.server+'/getdetails/'+this.telephone_number).map(res => res).subscribe(res=>{ 
    this.storage.set('storage2',res);
      
        console.log(res);
        this.storage.get('storage2').then((res)=>{
          //console.log(res.nameini);

 
          this.choose=res.choose;
          this.nameini=res.nameini;
          this.namefull=res.namefull;
          this.address=res.address;
          this.TpNo=res.TpNo;
          this.dob=res.dob;
          this.nic=res.nic;

          console.log(this.dob);


        })
        
        
     
      
      
    },
    err=>{
        console.log(err);
       }
    )
  });

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
  }

  
 
  

   // val.telephone_number
    
  //var getBackMyJSON = $('storage_XXX').data('telephone_number').key;
  //console.log('Your age is', getBackMyJSON);
  //this.navCtrl.push(farmerprofile,body);
  //});
  
/*  Show(){
    this.router.navigate(['/tabs']);
  }

  ApplyaLoan(){
   this.router.navigate(['/crop']);
  }

 Edit(){
    this.router.navigate(['/edit']);
  }*/
}
