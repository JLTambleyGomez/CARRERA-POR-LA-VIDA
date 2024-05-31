import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsNoSoyCorredorTresComponent } from './form-ins-no-soy-corredor-tres.component';

describe('FormInsNoSoyCorredorTresComponent', () => {
  let component: FormInsNoSoyCorredorTresComponent;
  let fixture: ComponentFixture<FormInsNoSoyCorredorTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsNoSoyCorredorTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInsNoSoyCorredorTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
