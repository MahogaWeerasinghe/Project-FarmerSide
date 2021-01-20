
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Location } from "@angular/common";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(private callNumber: CallNumber,
              private home: Location) {

   } 


  ngOnInit() {
  }

  back(){
    this.home.back();
  }

  call2(){
    try{
      this.callNumber.callNumber("+94766004932", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }catch{
      console.log('provider not working');
    }
  }
  
  call1(){
    try{
      this.callNumber.callNumber("+94719213455", true)
      .then(res => console.log('Launched dialer!', res))
       .catch(err => console.log('Error launching dialer', err));
    }catch{
      console.log('provider2 not working');
    }
  } 

}