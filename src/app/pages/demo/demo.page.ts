import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }


  tologin(){
    this.router.navigate(['/login']);
  }

  openbanks(){
    this.router.navigate(['/crop']);
  }
}
