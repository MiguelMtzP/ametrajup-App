import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiPerfilComponent } from './admi-perfil.component';

describe('AdmiPerfilComponent', () => {
  let component: AdmiPerfilComponent;
  let fixture: ComponentFixture<AdmiPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
