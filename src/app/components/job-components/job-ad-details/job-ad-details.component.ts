import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobAd } from 'src/app/models/job-ad.model';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-job-ad-details',
  templateUrl: './job-ad-details.component.html',
  styleUrls: ['./job-ad-details.component.scss']
})
export class JobAdDetailsComponent implements OnInit {
  jobAdObj: JobAd = {
    id: '',
    heading: '',
    description: '',
    likes: '',
    type: '',
    category: ''
  }

  constructor(private data: DataService, private route: ActivatedRoute, private auth: AuthService) { }

  isAdmin = this.auth.isAdmin()
  loggedIn = this.auth.loggedIn()
  liked = this.data.isLiked()

  adId = this.route.snapshot.paramMap.get('id')
  ad = <any>{}
  showEdit: boolean = false
  candidates = <any>[]

  ngOnInit(): void {
    this.getSingleAd()
  }
  getSingleAd() {
    this.data.getSingleAd(this.adId).subscribe(res => {
      this.ad = res.payload.data()
      this.jobAdObj = this.ad
    },
      err => {
        console.debug(err);
      }
    )
  }
  deleteAd() {
    if (window.confirm(`Are you sure you want to delete ${this.ad.heading}?`)) {
      this.data.deleteAd(this.adId)
    }
  }
  updateAd() {
    this.jobAdObj.id = this.adId || ''
    this.jobAdObj.heading = this.ad.heading
    this.jobAdObj.category = this.ad.category
    this.jobAdObj.description = this.ad.description
    this.jobAdObj.likes = this.ad.likes
    this.jobAdObj.type = this.ad.type

    this.data.updateAd(this.adId || '', this.jobAdObj)
    this.showEdit = false
  }
  applyForAd() {
    const candidate = this.loggedIn
    this.candidates.push(candidate)

    this.data.applyForAd(this.adId || '', { candidates: this.candidates })
  }
  likeAd() {
    console.log(this.adId);
    this.data.likeAd(this.ad,this.adId || '')
  }
}
