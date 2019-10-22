import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddSensorResponse } from '../../models/addResponse';

@Component({
  selector: 'app-aws-form',
  templateUrl: './aws-form.component.html',
  styleUrls: ['./aws-form.component.css']
})
export class AwsFormComponent implements OnInit {
  @Input() modalVisibility: boolean;
  @Output() toggleModal = new EventEmitter();

  message: string;
  jsonForm: string;
  payload: {};
  // a: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  modalToggler() {
    if (this.modalVisibility === false) {
      this.modalVisibility = true;
    } else {
      this.modalVisibility = false;
    }
    this.toggleModal.emit(this.modalVisibility);
  }
  onSubmit(form: NgForm) {
    console.log(form.value);

    this.payload = {
      name: form.value.name,
      cloud: 'aws',
      connection: JSON.stringify(form.value.connection),
      format: form.value.format,
      timeInterval: form.value.timeInterval,
      frequency: form.value.frequency,
      minRange: form.value.minRange,
      maxRange: form.value.maxRange
    };

    this.http
      .post<AddSensorResponse>(
        'http://127.0.0.1:5000/api/v1/sensors',
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
