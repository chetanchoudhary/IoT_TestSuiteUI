import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loadedSensors: [];
  spinnerVisibility: boolean;
  message: string;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAllSensors();
    this.spinnerVisibility = false;
  }

  private fetchAllSensors() {
    this.http.get('http://127.0.0.1:5000/api/v1/sensors').subscribe(res => {
      this.loadedSensors = res.sensors;
      console.log(this.loadedSensors);
    });
  }
  simulate(sensorName: string) {
    this.spinnerVisibility = true;
    this.http
      .post('http://127.0.0.1:5000/api/v1/sensors/' + sensorName, '')
      .subscribe(res => {
        this.message = res.message;
        console.log(res);
        this.spinnerVisibility = false;
      });
  }
}
