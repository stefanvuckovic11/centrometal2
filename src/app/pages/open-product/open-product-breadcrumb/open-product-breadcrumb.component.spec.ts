import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb.component';

describe('OpenProductBreadcrumbComponent', () => {
  let component: OpenProductBreadcrumbComponent;
  let fixture: ComponentFixture<OpenProductBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenProductBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenProductBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
