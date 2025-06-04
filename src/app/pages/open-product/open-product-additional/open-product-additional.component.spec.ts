import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProductAdditionalComponent } from './open-product-additional.component';

describe('OpenProductAdditionalComponent', () => {
  let component: OpenProductAdditionalComponent;
  let fixture: ComponentFixture<OpenProductAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenProductAdditionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenProductAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
