import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {


  public clusters: BehaviorSubject<any[]>
  
  constructor(@Inject('endPoint') private usersBaseUrl: string , private http: HttpClient) { 
    this.clusters = new BehaviorSubject([])
  }

  private headers= new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  public getRFMAnalysis(timePeriod: string) {
    this.http.get<any[]>(`${this.usersBaseUrl}/invoices/${timePeriod}`, {headers: this.headers}).subscribe(clusterData => {
        this.clusters.next(clusterData);
    })
  }
}