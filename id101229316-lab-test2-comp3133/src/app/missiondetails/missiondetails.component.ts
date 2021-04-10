import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  constructor(private http: HttpClient, private ActivatedRouter: ActivatedRoute) { }

  info: any = [];
  flight_number: any;

  ngOnInit(): void {
    const URL = "https://api.spacexdata.com/v3/launches"
    this.http.get(URL).subscribe((res) => {

      this.info = res
    })
    this.flight_number = this.ActivatedRouter.snapshot.paramMap.get("id");
  }

}
