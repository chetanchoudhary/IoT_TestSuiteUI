import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchSensorsService {
  constructor(private http: HttpClient) {}

  getAllSensors() {
    this.http.get('http://127.0.0.1:5000/api/v1/sensors').subscribe(res => {
      return res.sensors;
    });
  }
}
