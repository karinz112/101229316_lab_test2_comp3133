import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  info: any;

  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
    const URL = "https://api.spacexdata.com/v3/launches"
    this.http.get(URL).subscribe((res) => {

      this.info = res
      console.log(this.info);

    })
  }

}
