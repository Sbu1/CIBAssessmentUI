import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  getPhonebooks() {
    return this._http.get("https://localhost:49851/api/phonebook");
  }
}
