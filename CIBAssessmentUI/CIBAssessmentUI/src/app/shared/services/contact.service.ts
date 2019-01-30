import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  getContacts(id) {
    return this._http.get("https://localhost:49851/api/Entry/" + id);
  }
}
