import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-range',
  templateUrl: './update-range.component.html',
  styleUrls: ['./update-range.component.css']
})
export class UpdateRangeComponent implements OnInit {
  @Input() modalVisibility: boolean;
  @Output() toggleModal = new EventEmitter();

  minRange: number;
  maxRange: number;
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

  updateRange() {
    const sensorName = this.route.snapshot.params['name'];

    const payload = { minRange: this.minRange, maxRange: this.maxRange };
    this.http
      .put(
        'http://127.0.0.1:5000/api/v1/sensors/' + sensorName + '/range',
        payload
      )
      .subscribe(res => {
        this.message = res.message;
        console.log(this.message);
      });
  }
}
