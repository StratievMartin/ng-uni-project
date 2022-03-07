import { Component, OnInit } from '@angular/core';
import { JobAd } from 'src/app/models/job-ad.model';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.scss']
})
export class JobAdComponent implements OnInit {
  
  jobAdsList: JobAd[] = [];
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllAds()
  }
  getAllAds() {
    this.data.getAllAds().subscribe(res => {
      this.jobAdsList = res.map((el: any) => {
        const data = el.payload.doc.data();
        data.id = el.payload.doc.id;
        return data
      })
    }, err => {
      alert('Fetching data error')
      console.log(err)
    })
  }
}
