import { Component, OnInit } from '@angular/core';
import { Data } from './app.interface';

import { HealthStatsService } from './health-stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  data: Data[];
  title = 'Health-stats-dashboard';
  selectedState = undefined;
  selectedStateData: Data[];
  stateList: string[] = [];
  constructor(private serivce: HealthStatsService) {}

  ngOnInit() {
    this.serivce.callApi().subscribe((data) => {
      this.data = data;
      data.forEach((item: Data) => {
        if (!this.stateList.includes(item.region)) {
          this.stateList.push(item.region);
        }
      });
    });
  }

  onStateChange = () =>
    this.selectedStateData = this.data.filter(
      (a) => a.region === this.selectedState
    )
}
