import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private http: Http) { }


  get(url) {
    return this.http.get(url);
  }
  
  post(url, obj) {
    return this.http.post(url, obj);
  }
}
