import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-job-ad-details',
  templateUrl: './job-ad-details.component.html',
  styleUrls: ['./job-ad-details.component.scss']
})
export class JobAdDetailsComponent implements OnInit {

  constructor(private data: DataService, private route: ActivatedRoute) { }

  adId = this.route.snapshot.paramMap.get('id')

  ad = <any>{}
  ngOnInit(): void {
    this.getSingleAd()
  }
  getSingleAd() {
    this.data.getSingleAd(this.adId).subscribe(res => {
      this.ad = res.payload.data()
      console.log(this.ad);
    },
      err => {
        console.debug(err);
      }
    )
  }
}
