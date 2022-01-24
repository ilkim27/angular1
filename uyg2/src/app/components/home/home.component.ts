import { Kayit } from './../../model/kayit';
import { Router } from '@angular/router';
import { Uye } from './../../model/uye';
import { FbservisService } from './../../services/fbservis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adsoyad:string;
  uid:string;
  kayitlar:Kayit[];

  constructor(
    public fbServis:FbservisService,
    public router:Router
  ) { }

  ngOnInit(): void {
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.adsoyad=user.displayName;
    this.KayıtListele()
  }
  OturumuKapat(){
    this.fbServis.OturumKapa().then(d=>{
      localStorage.removeItem("user");
      this.router.navigate(['/kullanicigirisi']);
    })
    
  }
  KayıtListele(){
    this.fbServis.KayitlisteleByUID(this.uid).snapshotChanges().subscribe(data=>{
this.kayitlar=[];
data.forEach(satir=>{
const y={...satir.payload.toJSON(),key:satir.key};
this.kayitlar.push(y as Kayit);
});
    });

  }
}
