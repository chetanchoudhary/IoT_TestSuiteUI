import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() modalVisibility: boolean;
  @Output() toggleModal = new EventEmitter();

  frequency: number;
  message: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // this.modalVisibility = true;
  }

  ngOnInit() {}

  modalToggler() {
    if (this.modalVisibility === false) {
      this.modalVisibility = true;
    } else {
      this.modalVisibility = false;
    }
    this.toggleModal.emit(this.modalVisibility);
  }

  // updateFrequency() {
  //   const sensorName = this.route.snapshot.params['name'];
  //   console.log(this.frequency);
  //   const payload = { frequency: this.frequency };
  //   this.http
  //     .put(
  //       'http://127.0.0.1:5000/api/v1/sensors/' + sensorName + '/frequency',
  //       payload
  //     )
  //     .subscribe(res => {
  //       this.message = res.message;
  //       console.log(this.message);
  //     });
  // }
}
