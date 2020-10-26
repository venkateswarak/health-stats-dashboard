import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HealthStatsService {
  constructor(private http: HttpClient) { }

  callApi(): Observable<any> {
    const url = 'https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv';
    return this.http.get(url);
  }
}
