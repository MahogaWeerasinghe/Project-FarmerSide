import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation} from  '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { google } from "google-maps";

declare var google;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.page.html',
  styleUrls: ['./gmap.page.scss'],
})

@Injectable({
  providedIn: 'root' // just before your class
})

export class GmapPage  {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private storage:Storage,
    private router:Router
  ) {
   
   }

  ngOnInit() {
    //this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
        
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
        console.log(this.address);
        let arr={
          't1':lattitude,'t2':longitude,'t3':this.address
        }
        console.log(this.latitude);
        console.log(this.address);
        this.storage.set('storage_location',arr);
      })
      
      .catch((error: any) => {
        this.address = "Address Not Available!";
      }
        
      );
      
      //console.log(this.arr);

  }
  back(){
    this.router.navigate(['/application']);
  }

  
}
