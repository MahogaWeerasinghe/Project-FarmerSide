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

  constructor(private router :Router,
    private storage:Storage,
    private navCtrl:NavController)  { 
      this.storage.get('storage_XXX').then((val) => {
        console.log('Your age is',  val.telephone_number);
    
  });

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
