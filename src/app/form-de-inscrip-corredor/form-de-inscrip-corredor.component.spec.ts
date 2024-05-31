import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeInscripCorredorComponent } from './form-de-inscrip-corredor.component';

describe('FormDeInscripCorredorComponent', () => {
  let component: FormDeInscripCorredorComponent;
  let fixture: ComponentFixture<FormDeInscripCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeInscripCorredorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeInscripCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
