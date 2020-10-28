import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.page.html',
  styleUrls: ['./change-pw.page.scss'],
})
export class ChangePwPage implements OnInit {

  showpassword;
  passwordtoggleicon;


  constructor() {
   // showpassword;
    //passwordtoggleicon;
   }

  ngOnInit() {
  }

  togglepassword() : void{
    if(this.showpassword==true){
      this.showpassword=false;
    }

    else{
      this.showpassword=true;
    }
    

    if(this.passwordtoggleicon =='eye'){
        this.passwordtoggleicon='eye-off';
    }
    else{
      this.passwordtoggleicon='eye';
    }
  
  }
  
 // this.showpassword = true;
 // this.passwordtoggleicon ="eye";
  
}
