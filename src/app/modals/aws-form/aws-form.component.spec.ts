import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsFormComponent } from './aws-form.component';

describe('AwsFormComponent', () => {
  let component: AwsFormComponent;
  let fixture: ComponentFixture<AwsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
