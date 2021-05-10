import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Geo
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

//Storage
import { IonicStorageModule } from '@ionic/storage-angular';

//SQL
import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
//npm install @ionic-native/sqlite
//ionic cordova plugin add cordova-sqlite-storage
//npm i @ionic-native/core
//npm install @ionic-native/sqlite-porter
//ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  IonicStorageModule.forRoot(),
  HttpClientModule],
  providers: [Geolocation, NativeGeocoder, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SQLite, SQLitePorter],
  bootstrap: [AppComponent],
})
export class AppModule {}
