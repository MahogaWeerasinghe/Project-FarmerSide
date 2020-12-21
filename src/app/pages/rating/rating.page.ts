import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  star1=false;
  star2=false;
  star3=false;
  star4=false;
  star5=false;
  i:any=0;
  constructor() { }

  ngOnInit() {
  }

  click1(){
    console.log("five");
    if(this.star1==false){
        this.i++;
        console.log(this.i);
        this.star1=true;
    }
    else{
      this.i--;
      console.log(this.i);
      this.star1=false;
    }
  }

  click2(){
    console.log("four");
    if(this.star2==false){
      this.i++;
      console.log(this.i);
      this.star2=true;
  }
  else{
    this.i--;
    console.log(this.i);
    this.star2=false;
  }
    
  }

  click3(){
    console.log("three");
    if(this.star3==false){
      this.i++;
      console.log(this.i);
      this.star3=true;
  }
  else{
    this.i--;
    console.log(this.i);
    this.star3=false;
  }
    
  }

  click4(){
    console.log("two");
    if(this.star4==false){
      this.i++;
      console.log(this.i);
      this.star4=true;
  }
  else{
    this.i--;
    console.log(this.i);
    this.star4=false;
  }
    
  }

  click5(){
    console.log("one");
    if(this.star5==false){
      this.i++;
      console.log(this.i);
      this.star5=true;
  }
  else{
    this.i--;
    console.log(this.i);
    this.star5=false;
  }
    
  }

  submit(){
    console.log(this.i);
  }

}
