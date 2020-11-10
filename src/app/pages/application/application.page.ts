import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';



@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {
  server:string='http://localhost:8000';
  public items : any;
  i:any;
  data:any;
  dat:string="";
  bank_id:string;
  telephone_number:string="";
  nic:string="";
  loan_id:string="";

  date:string="";
  crop:string="";
  whatfor:string="";
  reason:string="";
  amount:number;
  months:number;
  civil:string="";
  spousename:string="";
  spo_emplo:string="";
  children:number;
  fix_name:string="";
  fix_deed:string="";
  fix_size:number;
  fix_value:number;
  mot_about:string="";
  mot_location:string="";
  mot_value:number;
  gua1_name:string="";
  gua1_occ:string="";
  gua1_tp:string="";
  gua2_name:string="";
  gua2_occ:string="";
  gua2_tp:string="";
  hide=false;

  
  disableButton;

  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,) { 

    this.storage.get("storage_app").then((res)=>{
      console.log("loan id",res);
      this.loan_id=res;



      this.http.get(this.server+'/getloandetails/'+this.loan_id).map(res => res).subscribe(res=>{ 
        //this.storage.set('store_nic',res);
           this.data=res;
  
             this.loan_id=this.data.loan_id;
             
         });
   

    this.storage.get('storage_XXX').then((val) => {
      console.log('Your tel is',  val.telephone_number);
     this.telephone_number=val.telephone_number;
    

    

    this.http.get(this.server+'/getdetails/'+this.telephone_number).map(res => res).subscribe(res=>{ 
     //this.storage.set('store_nic',res);
        this.data=res;

          this.nic=this.data.nic;

      });
    });
  });
  console.log(this.nic);

  if(this.loan_id=="L01"){
    this.hide=false;
  }

  else{
    this.hide=true;
  }
          
  }

  

  ngOnInit() {
  }
  
  async submitapp(){
    
    if(this.date==""){
      this.presentToast("Date is required");
  }else if(this.crop==""){
    this.presentToast("crop is required");
  }else if(this.reason=="")
  {
    this.presentToast("reason is required");
  }
  else{
    this.disableButton=true;
    const loader=await this.loadingCtrl.create({
        message:'Please wait......',
    });
    loader.present();
      return new Promise(resoler=>{
        let body={
          loan_id:this.loan_id,
          nic:this.nic,
          date:this.date,
          crop:this.crop,
          whatfor:this.whatfor,
          reason:this.reason,
          amount:this.amount,
          months:this.months,
          civil:this.civil,
          spousename:this.spousename,
          spo_emplo:this.spo_emplo,
          children:this.children,
          fix_name:this.fix_name,
          fix_deed:this.fix_deed,
          fix_size:this.fix_size,
          fix_value:this.fix_value,
          mot_about:this.mot_about,
          mot_location:this.mot_location,
          mot_value:this.mot_value,
          gua1_name:this.gua1_name,
          gua1_occ:this.gua1_occ,
          gua1_tp:this.gua1_tp,
          gua2_name:this.gua2_name,
          gua2_occ:this.gua2_occ,
          gua2_tp:this.gua2_tp,
                
        }
        this.acessPr.postSubmit(body).subscribe((res:any)=>{
            if(res.status==true){
              loader.dismiss();
              this.disableButton=false;
              this.presentToast(res.message);
              this.router.navigate(['/farmer-profile']);

            }else{
              loader.dismiss();
              this.disableButton=false;
              this.presentToast(res.message);
            }
        },(err=>{
          loader.dismiss();
          this.disableButton=false;
          this.presentAlert('Timeout');
        }));
      });

      

    
  }
          
  }
  //console.log(telephone_number);
  async presentToast(a) {
    let toast = await this.toastCtrl.create({
      message: a,
      duration: 3000,
      position: 'top'
    });
  toast.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
     backdropDismiss:false,
      header: a,
      
      buttons: [
        {
          text: 'close',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Try Again',
          handler: () => {
           this.submitapp()
          }
        }
      ]
    });

    await alert.present();
  }

 /* attachagrireports(){
  
      const fileTransfer: FileTransferObject = this.transfer.create();
      let options: FileUploadOptions = {
      //The name of the form element.(optional)
      fileKey: ‘file’,
      
      //The file name to use when saving the file on the server(optional)
      fileName: ‘name.pdf’,  
      headers: {}
      
      }
      fileTransfer.upload('url of your file', 'target url', options)
      .then((data) => {
      // success
      }, (err) => {
      // error
      })
     
  }*/


}
