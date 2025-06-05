import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProductSimilarComponent } from './open-product-similar.component';

describe('OpenProductSimilarComponent', () => {
  let component: OpenProductSimilarComponent;
  let fixture: ComponentFixture<OpenProductSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenProductSimilarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenProductSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
