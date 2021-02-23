import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public allData: BehaviorSubject<any[]>
  constructor(@Inject('endPoint') private usersBaseUrl: string , private http: HttpClient) { 
    this.allData = new BehaviorSubject([])
  }

  private headers= new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  public getUsersPerCluster( clusterID: number) {
    this.http.get<object[]>(`${this.usersBaseUrl}/invoices/c/${clusterID}`, {headers: this.headers}).subscribe(data  => {
      this.allData.next(data)
    })
  }
}
