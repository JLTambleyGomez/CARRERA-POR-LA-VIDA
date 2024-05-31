import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeInscEquipoComponent } from './form-de-insc-equipo.component';

describe('FormDeInscEquipoComponent', () => {
  let component: FormDeInscEquipoComponent;
  let fixture: ComponentFixture<FormDeInscEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeInscEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeInscEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
