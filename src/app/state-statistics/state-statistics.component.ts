import { Component, Input, OnChanges } from '@angular/core';
import { Data } from '../app.interface';

@Component({
  selector: 'app-state-statistics',
  templateUrl: './state-statistics.component.html',
  styleUrls: ['./state-statistics.component.scss'],
})
export class StateStatisticsComponent implements OnChanges {
  @Input() data: Data[];
  selectedStateProperties: Data;

  constructor() {}

  ngOnChanges(): void {
    this.selectedStateProperties = this.data.find((item: Data) => item.period === '2015');
  }
}
