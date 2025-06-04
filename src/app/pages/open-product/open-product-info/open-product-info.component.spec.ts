import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProductInfoComponent } from './open-product-info.component';

describe('OpenProductInfoComponent', () => {
  let component: OpenProductInfoComponent;
  let fixture: ComponentFixture<OpenProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenProductInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
