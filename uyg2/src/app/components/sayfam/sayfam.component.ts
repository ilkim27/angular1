import { Router } from '@angular/router';
import { FbservisService } from './../../services/fbservis.service';
import { Kayit } from './../../model/kayit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sayfam',
  templateUrl: './sayfam.component.html',
  styleUrls: ['./sayfam.component.css']
})
export class SayfamComponent implements OnInit {
  sayfam:any;
  seckayit:Kayit=new Kayit();
  constructor(
    public fbServis:FbservisService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  Kaydet(){
    var user=JSON.parse(localStorage.getItem("user"));
    this.seckayit.uid=user.uid;
    this.fbServis.KayitEkle(this.seckayit).then(d=>{
      this.router.navigate(['/home']);
    }

    )


  }
}
