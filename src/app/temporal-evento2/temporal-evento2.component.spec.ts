import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalEvento2Component } from './temporal-evento2.component';

describe('TemporalEvento2Component', () => {
  let component: TemporalEvento2Component;
  let fixture: ComponentFixture<TemporalEvento2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalEvento2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalEvento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
