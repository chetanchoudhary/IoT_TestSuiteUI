import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimeIntervalComponent } from './update-time-interval.component';

describe('UpdateTimeIntervalComponent', () => {
  let component: UpdateTimeIntervalComponent;
  let fixture: ComponentFixture<UpdateTimeIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTimeIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTimeIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
