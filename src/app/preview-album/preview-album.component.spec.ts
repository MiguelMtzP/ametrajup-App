import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAlbumComponent } from './preview-album.component';

describe('PreviewAlbumComponent', () => {
  let component: PreviewAlbumComponent;
  let fixture: ComponentFixture<PreviewAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
