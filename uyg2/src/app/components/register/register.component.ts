import { Uye } from './../../model/uye';
import { FbservisService } from './../../services/fbservis.service';
import { Sonuc } from './../../model/sonuc';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  sonuc:Sonuc= new Sonuc();
  secUye:Uye= new Uye();
  constructor(
    public fbServis:FbservisService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  KayitYap(){
    this.fbServis.UyeOl(this.secUye).then(d=>{
      d.user.updateProfile({
        displayName: this.secUye.adsoyad
      }).then();
      this.secUye.uid=d.user.uid;
      localStorage.setItem("user",JSON.stringify(d.user));
      this.UyeEkle();
      this.sonuc.islem=true;
      this.sonuc.mesaj="Üye Oldunuz Lütfen Giriş Yapınız"
    }, err =>{
      this.sonuc.islem=false;
      this.sonuc.mesaj="Hata Oluştu Tekrar Deneyiniz!"
    }
 );
  }
  UyeEkle() {
  this.fbServis.UyeEkle(this.secUye).then(d=>{
    this.router.navigate(['/']);

  });
  }
 
  }


