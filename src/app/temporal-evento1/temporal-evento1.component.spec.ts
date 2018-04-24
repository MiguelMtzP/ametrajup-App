import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalEvento1Component } from './temporal-evento1.component';

describe('TemporalEvento1Component', () => {
  let component: TemporalEvento1Component;
  let fixture: ComponentFixture<TemporalEvento1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalEvento1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalEvento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
