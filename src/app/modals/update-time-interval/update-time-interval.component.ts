import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-time-interval',
  templateUrl: './update-time-interval.component.html',
  styleUrls: ['./update-time-interval.component.css']
})
export class UpdateTimeIntervalComponent implements OnInit {
  @Input() modalVisibility: boolean;
  @Output() toggleModal = new EventEmitter();

  timeInterval: number;
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

  updateTimeInterval() {
    const sensorName = this.route.snapshot.params['name'];
    console.log(this.timeInterval);
    const payload = { timeInterval: this.timeInterval };
    this.http
      .put(
        'http://127.0.0.1:5000/api/v1/sensors/' + sensorName + '/timeInterval',
        payload
      )
      .subscribe(res => {
        this.message = res.message;
        console.log(this.message);
      });
  }
}
