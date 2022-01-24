import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DosyalarimComponent } from './components/dosyalarim/dosyalarim.component';
import { HomeComponent } from './components/home/home.component';
import { KullanicigirisiComponent } from './components/kullanicigirisi/kullanicigirisi.component';
import { PaylasilanlarComponent } from './components/paylasilanlar/paylasilanlar.component';
import { RegisterComponent } from './components/register/register.component';
import { SayfamComponent } from './components/sayfam/sayfam.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    DosyalarimComponent,
    HomeComponent,
    KullanicigirisiComponent,
    PaylasilanlarComponent,
    RegisterComponent,
    SayfamComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
AngularFireDatabaseModule,
AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
