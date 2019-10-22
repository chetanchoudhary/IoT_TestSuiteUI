import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllSensorResponse } from '../models/getAllSensorResponse';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  loadedSensors: [];
  clouds = ['PTC Thingworx', 'Amazon Web Services', 'Microsoft Azure'];
  ptcModalVisibility: boolean;
  awsModalVisibility: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  awsToggleModal(modalVisibility: boolean) {
    this.awsModalVisibility = modalVisibility;
  }
  ptcToggleModal(modalVisibility: boolean) {
    this.ptcModalVisibility = modalVisibility;
  }

  fetchSensors() {
    this.fetchAllSensors();
  }
  private fetchAllSensors() {
    this.http
      .get<AllSensorResponse>('http://127.0.0.1:5000/api/v1/sensors')
      .subscribe(res => {
        this.loadedSensors = res.sensors;
        console.log(this.loadedSensors);
      });
  }
}
