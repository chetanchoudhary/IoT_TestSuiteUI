import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent implements OnInit {
  loadedSensor: {};
  spinnerVisibility: boolean;
  message: string;
  frequencyModalVisibility: boolean;
  timeIntervalModalVisibility: boolean;
  rangeModalVisibility: boolean;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    this.http
      .get('http://127.0.0.1:5000/api/v1/sensors/' + name)
      .subscribe(res => {
        console.log(res);
        this.loadedSensor = res;
      });
    this.spinnerVisibility = false;
  }

  frequencyToggleModal(modalVisibility: boolean) {
    this.frequencyModalVisibility = modalVisibility;
  }
  timeIntervalToggleModal(modalVisibility: boolean) {
    this.timeIntervalModalVisibility = modalVisibility;
  }
  rangeToggleModal(modalVisibility: boolean) {
    this.rangeModalVisibility = modalVisibility;
  }
  simulate() {
    this.spinnerVisibility = true;
    this.http
      .post(
        'http://127.0.0.1:5000/api/v1/sensors/' + this.loadedSensor.name,
        ''
      )
      .subscribe(res => {
        this.spinnerVisibility = false;
        this.message = res.message;
        console.log(res);
      });
  }

  deleteSensor() {
    this.http
      .delete('http://127.0.0.1:5000/api/v1/sensors/' + this.loadedSensor.name)
      .subscribe(res => {
        this.message = res.message;
        this.router.navigate(['/dashboard']);
      });
  }
}
