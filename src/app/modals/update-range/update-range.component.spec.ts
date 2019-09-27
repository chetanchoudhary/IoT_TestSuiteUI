import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRangeComponent } from './update-range.component';

describe('UpdateRangeComponent', () => {
  let component: UpdateRangeComponent;
  let fixture: ComponentFixture<UpdateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
