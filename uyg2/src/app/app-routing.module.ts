import { KullanicigirisiComponent } from './components/kullanicigirisi/kullanicigirisi.component';
import { RegisterComponent } from './components/register/register.component';
import { PaylasilanlarComponent } from './components/paylasilanlar/paylasilanlar.component';
import { HomeComponent } from './components/home/home.component';
import { SayfamComponent } from './components/sayfam/sayfam.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DosyalarimComponent } from './components/dosyalarim/dosyalarim.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectLogin=()=>redirectUnauthorizedTo(['kullanicigiris']);
const routes: Routes = [
  {path:"sayfam",component:SayfamComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe:redirectLogin
  }

},
  {path:"dosyalarım",component:DosyalarimComponent,
  
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe:redirectLogin
  },
},
  {path:"paylaşılanlar",component:PaylasilanlarComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe:redirectLogin
  }},
 
  {path:"kullanıcıgiris",component:KullanicigirisiComponent},
  {path:"dbi",component:HomeComponent},
  {path:"register",component:RegisterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }