import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsNoSoyCorredorDosComponent } from './form-ins-no-soy-corredor-dos.component';

describe('FormInsNoSoyCorredorDosComponent', () => {
  let component: FormInsNoSoyCorredorDosComponent;
  let fixture: ComponentFixture<FormInsNoSoyCorredorDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsNoSoyCorredorDosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInsNoSoyCorredorDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
