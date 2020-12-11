import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation} from  '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router,ActivatedRoute } from '@angular/router';
import { AccessProviders } from '../../pro/access';
import {Storage} from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';

declare var google;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  latitude :number;
  longitude:number;
  address:string;
  land:any;
  data:any;

  constructor(private router:Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,) { 
      this.storage.get('storage_loaction').then((res)=>{
        this.land=res;
        console.log( res);
       this.http.get(AccessProviders.server+'/getapplicantdetails/'+ this.land).subscribe((res:any)=>{ 
          this.data=res.message;
          this.address=res.message[0].address; 
          this.latitude=res.message[0].latitude;
          this.longitude=res.message[0].longitude;
          console.log(this.latitude+this.longitude);
          this.loadMap();
          console.log(res.message)},
               err=>{
                 console.log(err);
        })
      });
    }

  ngOnInit() {
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((resp) => {

      //this.latitude = -34.9290;
      //this.longitude = 138.6010;
      console.log(this.latitude+this.longitude);
      let latLng = new google.maps.LatLng( this.latitude,this.longitude );

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    })
   

  }

}
