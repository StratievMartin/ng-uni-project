import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { JobAd } from '../../models/job-ad.model';
import { Router } from '@angular/router';
import { query, QuerySnapshot, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore, private router: Router) { }

  afsRef = this.afs.collection('/JobAds')

  addAd(jobAd: JobAd) {
    jobAd.id = this.afs.createId();
    return this.afsRef.add(jobAd)
  }
  getAllAds() {
    return this.afsRef.snapshotChanges();
  }
  getSingleAd(id: any) {
    return this.afsRef.doc(id).snapshotChanges()
  }
  getApplied(user: string) {
    const candidatesRef =  this.afs.collection('/JobAds', ref => ref.where('candidates', '==', user));
    return candidatesRef.snapshotChanges()
  }
  updateAd(id: string, data: any) {
    return this.afsRef.doc(id).update(data);
  }
  applyForAd(id: string, data: any) {
    this.router.navigate(['dashboard'])
    return this.afsRef.doc(id).set(data, { merge: true });
  }
  deleteAd(id: any) {
    this.router.navigate(['ads'])
    return this.afsRef.doc(id).delete();
  }
  // likeAd(jobAd : JobAd){
  //   localStorage.setItem('liked',jobAd.id)
  // }
}
