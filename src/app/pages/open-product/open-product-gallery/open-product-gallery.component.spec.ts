import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProductGalleryComponent } from './open-product-gallery.component';

describe('OpenProductGalleryComponent', () => {
  let component: OpenProductGalleryComponent;
  let fixture: ComponentFixture<OpenProductGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenProductGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenProductGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
