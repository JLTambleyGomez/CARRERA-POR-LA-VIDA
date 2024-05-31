import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsNoSoyCorredorComponent } from './form-ins-no-soy-corredor.component';

describe('FormInsNoSoyCorredorComponent', () => {
  let component: FormInsNoSoyCorredorComponent;
  let fixture: ComponentFixture<FormInsNoSoyCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsNoSoyCorredorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInsNoSoyCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
