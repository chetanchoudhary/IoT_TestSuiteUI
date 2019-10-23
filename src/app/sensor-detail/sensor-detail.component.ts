import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SensorDetail } from '../models/sensorDetail.model';
import { SimulationResponse } from '../models/simulationResponse';
import { SensorDeleteResponse } from '../models/deleteResponse';
import { NgForm } from '@angular/forms';
import { AddSensorResponse } from '../models/addResponse';
import { FileCheckResponse } from '../models/fileCheckResponse';

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
  rootCAExists: boolean;
  privateKeyExists: boolean;
  certificateExists: boolean;
  payload: {};

  selectedRootCAFile = null;
  selectedPrivateKeyFile = null;
  selectedCertificateFile = null;

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
    this.getCloud();
    this.rootCAFileCheck();
    this.certificateFileCheck();
    this.privateKeyFileCheck();
    console.log(this.rootCAExists);
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

  getCloud() {
    const name = this.route.snapshot.params.name;
    this.http
      .get<SensorDetail>('http://127.0.0.1:5000/api/v1/sensors/' + name)
      .subscribe(res => {
        this.cloudName = res.cloud;
      });
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

  onRootCASelected(event) {
    this.selectedRootCAFile = event.target.files[0];
  }
  onPrivateKeySelected(event) {
    this.selectedPrivateKeyFile = event.target.files[0];
  }
  onCertificateSelected(event) {
    this.selectedCertificateFile = event.target.files[0];
  }

  onSubmitRootCA() {
    const fd = new FormData();
    fd.append(
      'certificate',
      this.selectedRootCAFile,
      this.selectedRootCAFile.name
    );
    this.http
      .post<AddSensorResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' +
          this.loadedSensor.name +
          '/uploadCertificate',
        fd
      )
      .subscribe(response => {
        console.log(response);
        if (response.statusCode === 201) {
          this.message = response.message;
          this.rootCAFileCheck();
        }
      });
  }

  onSubmitPrivateKey() {
    const fd = new FormData();
    fd.append(
      'certificate',
      this.selectedPrivateKeyFile,
      this.loadedSensor.name + '.private.key'
    );
    this.http
      .post<AddSensorResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' +
          this.loadedSensor.name +
          '/uploadCertificate',
        fd
      )
      .subscribe(response => {
        console.log(response);
        if (response.statusCode === 201) {
          this.message = response.message;
          this.privateKeyFileCheck();
        }
      });
  }
  onSubmitCertificate() {
    const fd = new FormData();
    fd.append(
      'certificate',
      this.selectedCertificateFile,
      this.loadedSensor.name + '.cert.pem'
    );
    this.http
      .post<AddSensorResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' +
          this.loadedSensor.name +
          '/uploadCertificate',
        fd
      )
      .subscribe(response => {
        console.log(response);
        if (response.statusCode === 201) {
          this.message = response.message;
          this.certificateFileCheck();
        }
      });
  }

  rootCAFileCheck() {
    const name = this.route.snapshot.params.name;
    this.http
      .get<FileCheckResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' + name + '/rootCACheck'
      )
      .subscribe(res => {
        this.rootCAExists = res.exists;
      });
  }

  certificateFileCheck() {
    const name = this.route.snapshot.params.name;
    this.http
      .get<FileCheckResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' + name + '/certificateCheck'
      )
      .subscribe(res => {
        this.certificateExists = res.exists;
      });
  }
  privateKeyFileCheck() {
    const name = this.route.snapshot.params.name;
    this.http
      .get<FileCheckResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' + name + '/privateKeyCheck'
      )
      .subscribe(res => {
        this.privateKeyExists = res.exists;
      });
  }

  deleteRootCA() {
    const name = this.route.snapshot.params.name;
    this.http
      .delete<SensorDeleteResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' + name + '/rootCACheck'
      )
      .subscribe(res => {
        this.message = res.message;
        this.rootCAFileCheck();
      });
  }

  deleteCertificate() {
    const name = this.route.snapshot.params.name;
    this.http
      .delete<SensorDeleteResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' + name + '/certificateCheck'
      )
      .subscribe(res => {
        this.message = res.message;
        this.certificateFileCheck();
      });
  }
  deletePrivateKey() {
    const name = this.route.snapshot.params.name;
    this.http
      .delete<SensorDeleteResponse>(
        'http://127.0.0.1:5000/api/v1/sensors/' + name + '/privateKeyCheck'
      )
      .subscribe(res => {
        this.message = res.message;
        this.privateKeyFileCheck();
      });
  }
}
