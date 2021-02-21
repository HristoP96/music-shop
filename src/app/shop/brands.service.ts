import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private brandsEndPoint = "http://localhost:8000/brands/";
  public brands: BehaviorSubject<any[]>;
  constructor(private http: HttpClient) {
    this.brands = new BehaviorSubject([]);
   }

   public getAllBrands() {
    let h = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    this.http.get<any[]>(this.brandsEndPoint, {headers: h}).subscribe(data => {
      this.brands.next(data);
    })
   }

}
