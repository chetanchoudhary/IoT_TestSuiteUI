import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPTCSensorComponent } from './add-ptcsensor.component';

describe('AddPTCSensorComponent', () => {
  let component: AddPTCSensorComponent;
  let fixture: ComponentFixture<AddPTCSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPTCSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPTCSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
