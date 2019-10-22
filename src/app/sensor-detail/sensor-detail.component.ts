import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SensorDetail } from '../models/sensorDetail.model';
import { SimulationResponse } from '../models/simulationResponse';
import { SensorDeleteResponse } from '../models/deleteResponse';
import { NgForm } from '@angular/forms';
import { AddSensorResponse } from '../models/addResponse';

@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css']
})
export class SensorDetailComponent implements OnInit {
  loadedSensor: SensorDetail;
  spinnerVisibility: boolean;
  message: string;
  frequencyModalVisibility: boolean;
  timeIntervalModalVisibility: boolean;
  rangeModalVisibility: boolean;
  cloudName: string;
  payload: {};
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    const name = this.route.snapshot.params['name'];
    this.http
      .get<SensorDetail>('http://127.0.0.1:5000/api/v1/sensors/' + name)
      .subscribe(res => {
        console.log(res);
        this.loadedSensor = res;
        this.cloudName = res.cloud;
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
      .post<SimulationResponse>(
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
      .delete<SensorDeleteResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' + this.loadedSensor.name
      )
      .subscribe(res => {
        this.message = res.message;
        this.router.navigate(['/dashboard']);
      });
  }

  onSubmitRootCA(form: NgForm) {
    console.log(form.value);

    this.payload = {
      rootCA: form.value.rootCA
    };
    this.http
      .post<AddSensorResponse>(
        'http://127.0.0.1:5000/api/v1/' +
          this.loadedSensor.name +
          '/uploadCertificate',
        this.payload
      )
      .subscribe(response => {
        console.log(response);
        if (response.statusCode === 201) {
          this.message = response.message;
          form.reset();
        }
      });
  }

  onSubmitPrivateKey(form: NgForm) {
    console.log(form.value);

    this.payload = {
      rootCA: form.value.rootCA
    };
    this.http
      .post<AddSensorResponse>(
        'http://127.0.0.1:5000/api/v1/uploadCertificate',
        this.payload
      )
      .subscribe(response => {
        console.log(response);
        if (response.statusCode === 201) {
          this.message = response.message;
          form.reset();
        }
      });
  }
  onSubmitCertificate(form: NgForm) {
    console.log(form.value);

    this.payload = {
      rootCA: form.value.rootCA
    };
    this.http
      .post<AddSensorResponse>(
        'http://127.0.0.1:5000/api/v1/uploadCertificate',
        this.payload
      )
      .subscribe(response => {
        console.log(response);
        if (response.statusCode === 201) {
          this.message = response.message;
          form.reset();
        }
      });
  }
}
