import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const nameAsyncValidator = (httpClient: HttpClient) => (c: FormControl) => {
  if (!c || String(c.value).length === 0) {
    return of(null);
  }

  return httpClient.get('http://127.0.0.1:5000/api/v1/sensors/' + c.value).pipe(
    map((res: any) => {
      return res.status === 404 ? null : { nameIsForbidden: true };
    })
  );
};

@Component({
  selector: 'app-add-ptcform-rx',
  templateUrl: './add-ptcform-rx.component.html',
  styleUrls: ['./add-ptcform-rx.component.css']
})
export class AddPTCFormRXComponent implements OnInit {
  @Input() modalVisibility: boolean;
  @Output() toggleModal = new EventEmitter();
  ptcSensorForm: FormGroup;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.modalVisibility = true;
    this.ptcSensorForm = new FormGroup({
      name: new FormControl(
        '',
        [Validators.required],
        [nameAsyncValidator(this.http)]
      ),
      connection: new FormGroup({
        broker: new FormControl(null, [Validators.required]),
        topic: new FormControl(null, [Validators.required]),
        appKey: new FormControl(null, [Validators.required])
      }),
      format: new FormControl(null, [Validators.required]),
      frequency: new FormControl(null, [Validators.required]),
      timeInterval: new FormControl(null, [Validators.required]),
      minRange: new FormControl(null, [Validators.required]),
      maxRange: new FormControl(null, [Validators.required])
    });
  }

  modalToggler() {
    if (this.modalVisibility === false) {
      this.modalVisibility = true;
    } else {
      this.modalVisibility = false;
    }
    this.toggleModal.emit(this.modalVisibility);
  }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.http
        .get('http://127.0.0.1:5000/api/v1/sensors/' + control.value)
        .subscribe(res => {
          if (res) {
            resolve({ nameIsForbidden: true });
          } else {
            resolve(null);
          }
        });
    });
    return promise;
  }

  onSubmit() {
    console.log(this.ptcSensorForm);
  }
}
