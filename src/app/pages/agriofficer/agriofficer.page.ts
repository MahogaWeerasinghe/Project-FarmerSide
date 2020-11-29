import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController,LoadingController,AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-agriofficer',
  templateUrl: './agriofficer.page.html',
  styleUrls: ['./agriofficer.page.scss'],
})
export class AgriofficerPage implements OnInit {

  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
  ) { }

  ngOnInit() {
  }

  requests(){
    this.router.navigate(['/agrirequests']);
  }

}
