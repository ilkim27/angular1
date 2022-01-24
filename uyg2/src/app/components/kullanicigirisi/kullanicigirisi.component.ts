import { FbservisService } from './../../services/fbservis.service';
import { Sonuc } from './../../model/sonuc';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kullanicigirisi',
  templateUrl: './kullanicigirisi.component.html',
  styleUrls: ['./kullanicigirisi.component.css']
})
export class KullanicigirisiComponent implements OnInit {
sonuc:Sonuc= new Sonuc();
  constructor(
    public fbServis:FbservisService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  GirisYap(mail:string,parola:string){
    this.fbServis.OturumAc(mail,parola).then(d =>{
      localStorage.setItem("user",JSON.stringify(d.user));
      this.router.navigate(['/sayfam']);

    },err=>{
      this.sonuc.islem=false;
      this.sonuc.mesaj="E-posta Adresi veya Parola Geçersiz";

    });
  }
}