import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, Data } from '../app.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges {
  @Input() data: Data[];
  propertiesArray = [
    { AtleastOne: 'atleast_one_measure' },
    { Immunization: 'immunization_measure' },
    { Registry: 'registry_measure' },
    { Reportable: 'reportable_lab_results_measure' },
    { Syndromic: 'syndromic_surveillance_measure' },
  ];
  chartData: ChartData[] = [];

  constructor() {}

  ngOnChanges() {
    const tempChartData: ChartData[] = [];
    this.propertiesArray.forEach((element) => {
      tempChartData.push({
        name: Object.keys(element)[0],
        series: this.formSeries(element[Object.keys(element)[0]]),
      });
    });
    this.chartData = tempChartData;
  }

  formSeries = (prop: string) => {
    const keyValue = [];
    this.data.forEach((element: Data) => {
      keyValue.push({
        name: element.period,
        value: +element[prop],
      });
    });
    return keyValue;
  }
}
