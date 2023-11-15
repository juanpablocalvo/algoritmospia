import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalifpredictivaComponent } from './califpredictiva.component';

describe('CalifpredictivaComponent', () => {
  let component: CalifpredictivaComponent;
  let fixture: ComponentFixture<CalifpredictivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalifpredictivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalifpredictivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
