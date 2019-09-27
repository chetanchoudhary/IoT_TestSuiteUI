import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPTCFormComponent } from './add-ptcform.component';

describe('AddPTCFormComponent', () => {
  let component: AddPTCFormComponent;
  let fixture: ComponentFixture<AddPTCFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPTCFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPTCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
