import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { JobAd } from '../models/job-ad.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore) { }

  addAd(jobAd : JobAd){
    jobAd.id = this.afs.createId();
    return this.afs.collection('/JobAds').add(jobAd)
  }
  getAllAds(){
    return this.afs.collection('/JobAds').snapshotChanges();
  }
  getSingleAd(id: any){
    this.afs.collection('/JobAds').doc(id).get()
  }
  updateAd(id: string, data: any) {
    return this.afs.collection('/JobAds').doc(id).update(data);
  }
  applyForAd(id: string, data: any){
    return this.afs.collection('/JobAds').doc(id).update(data);
  }
  deleteAd(jobAd : JobAd){
    return this.afs.doc(`/JobAds/${jobAd.id}`).delete()
  }
  // likeAd(jobAd : JobAd){
  //   localStorage.setItem('liked',jobAd.id)
  // }
}
