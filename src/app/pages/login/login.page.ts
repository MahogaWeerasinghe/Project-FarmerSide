import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router :Router) { 
    
  }

  ngOnInit() {
  }

  openRegister(){
    this.router.navigate(['/register']);
  }

  tryLogin(){
    this.router.navigate(['/farmer-profile']);
  }

}