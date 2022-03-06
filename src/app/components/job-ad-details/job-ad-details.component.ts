import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-job-ad-details',
  templateUrl: './job-ad-details.component.html',
  styleUrls: ['./job-ad-details.component.scss']
})
export class JobAdDetailsComponent implements OnInit {

  constructor(private data: DataService,private route: ActivatedRoute) { }
  
  adId = this.route.snapshot.paramMap.get('id')
  ad = []
  ngOnInit(): void {
    console.log(`id: ${this.adId}`);
    this.getSingleAd()
  }

  getSingleAd(){
    console.log(this.data.getSingleAd(this.adId));
    
  }
}
