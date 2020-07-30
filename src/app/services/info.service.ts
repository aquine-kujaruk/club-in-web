import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  info: Data = {};
  cargada = false;
  constructor(private http: HttpClient) {
    this.http.get('assets/data/data.json').subscribe((resp: Data) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
