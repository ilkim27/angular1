import { Dosya } from './../model/dosya';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StservisService {
basePath="/Dosyalar";
constructor(
  public storage:AngularFireStorage,
  public db:AngularFireDatabase
) { }

DosyaYukelStorage(dosya:Dosya){
  var tarih= new Date();
  const dosyaYol= this.basePath+"/"+dosya.file.name;
  const storageRef=this.storage.ref(dosyaYol);
  const yukleTask=this.storage.upload(dosyaYol,dosya.file);
  yukleTask.snapshotChanges().pipe(
finalize(()=>{
  storageRef.getDownloadURL().subscribe(downloadURL =>{
    dosya.url=downloadURL;
    dosya.adı=dosya.file.name;
    this.DosyaVeriYaz(dosya);
  }

  )
}
)
  ).subscribe();
  return yukleTask.percentageChanges();
  
}
DosyaVeriYaz(dosya: Dosya){
  this.db.list(this.basePath).push(dosya);
}
DosyaListele(){
  return this.db.list(this.basePath);
}
DosyaSil(dosya:Dosya){
this.DosyaVeriSil(dosya).then(() =>{
  this.DosyaStorageSil(dosya);
});
}
DosyaStorageSil(dosya:Dosya){
  const storageRef=this.storage.ref(this.basePath);
  storageRef.child(dosya.adı).delete();
}
DosyaVeriSil(dosya:Dosya){
  return this.db.list(this.basePath).remove(dosya.keys)
}
}
