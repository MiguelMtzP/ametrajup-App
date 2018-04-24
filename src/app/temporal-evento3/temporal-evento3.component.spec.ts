import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalEvento3Component } from './temporal-evento3.component';

describe('TemporalEvento3Component', () => {
  let component: TemporalEvento3Component;
  let fixture: ComponentFixture<TemporalEvento3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalEvento3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalEvento3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
