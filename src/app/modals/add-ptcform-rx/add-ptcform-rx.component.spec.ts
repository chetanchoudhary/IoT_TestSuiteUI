import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPTCFormRXComponent } from './add-ptcform-rx.component';

describe('AddPTCFormRXComponent', () => {
  let component: AddPTCFormRXComponent;
  let fixture: ComponentFixture<AddPTCFormRXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPTCFormRXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPTCFormRXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
