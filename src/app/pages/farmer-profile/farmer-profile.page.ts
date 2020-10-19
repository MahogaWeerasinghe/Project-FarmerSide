import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.page.html',
  styleUrls: ['./farmer-profile.page.scss'],
})
export class FarmerProfilePage implements OnInit {

  constructor(private router :Router) { 
    
  }

  ngOnInit() {
  }

  
  Show(){
    this.router.navigate(['/tabs']);
  }

  ApplyaLoan(){
   this.router.navigate(['/crop']);
  }

 Edit(){
    this.router.navigate(['/edit']);
  }
}
