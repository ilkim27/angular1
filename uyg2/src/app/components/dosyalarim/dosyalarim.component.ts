import { StservisService } from './../../services/stservis.service';
import { Dosya } from './../../model/dosya';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dosyalarim',
  templateUrl: './dosyalarim.component.html',
  styleUrls: ['./dosyalarim.component.css']
})
export class DosyalarimComponent implements OnInit {
 dosyalar:Dosya[];
 files:FileList;

  constructor(
    public stservis:StservisService
  ) { }

  ngOnInit(): void {
    this.DosyaListele();
  }
DosyaListele(){
  this.stservis.DosyaListele().snapshotChanges().subscribe(data=>{
    this.dosyalar=[];
    data.forEach(satir=>{
    const y={...satir.payload.toJSON(),key:satir.key};
    this.dosyalar.push(y as unknown as Dosya);
    });
        });


}
DosyaYukle(){
  var dosya=new Dosya();
  dosya.file= this.files[0];
  this.stservis.DosyaYukelStorage(dosya).subscribe(
    p=>{
      console.log("Yüklendi");

    }, err=>{
      console.log("Hata");
    }
  );

}
DosyaSil(dosya:Dosya){

  this.stservis.DosyaSil(dosya);
}
DosyaSec(e){
 this.files=e.target.files;
}

  }

