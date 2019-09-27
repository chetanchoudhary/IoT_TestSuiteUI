import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-ptcform',
  templateUrl: './add-ptcform.component.html',
  styleUrls: ['./add-ptcform.component.css']
})
export class AddPTCFormComponent implements OnInit {
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
      cloud: 'thingworx',
      connection: JSON.stringify(form.value.connection),
      format: form.value.format,
      timeInterval: form.value.timeInterval,
      frequency: form.value.frequency,
      minRange: form.value.minRange,
      maxRange: form.value.maxRange
    };

    this.http
      .post('http://127.0.0.1:5000/api/v1/sensors', this.payload)
      .subscribe(response => {
        console.log(response);
        if (response.statusCode === 201) {
          this.message = response.message;
          form.reset();
        }
      });
  }
}
