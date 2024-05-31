import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeInscripCorredorDComponent } from './form-de-inscrip-corredor-d.component';

describe('FormDeInscripCorredorDComponent', () => {
  let component: FormDeInscripCorredorDComponent;
  let fixture: ComponentFixture<FormDeInscripCorredorDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeInscripCorredorDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeInscripCorredorDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
