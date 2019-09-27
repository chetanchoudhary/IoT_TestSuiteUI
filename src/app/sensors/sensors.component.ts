import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  loadedSensors: [];
  clouds = ['PTC Thingworx', 'Amazon Web Services', 'Microsoft Azure'];
  modalVisibility: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  toggleModal(modalVisibility: boolean) {
    this.modalVisibility = modalVisibility;
  }

  fetchSensors() {
    this.fetchAllSensors();
  }
  private fetchAllSensors() {
    this.http.get('http://127.0.0.1:5000/api/v1/sensors').subscribe(res => {
      this.loadedSensors = res.sensors;
      console.log(this.loadedSensors);
    });
  }
}
