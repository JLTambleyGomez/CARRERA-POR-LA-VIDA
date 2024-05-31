import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeInscripcionGrupalComponent } from './form-de-inscripcion-grupal.component';

describe('FormDeInscripcionGrupalComponent', () => {
  let component: FormDeInscripcionGrupalComponent;
  let fixture: ComponentFixture<FormDeInscripcionGrupalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeInscripcionGrupalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeInscripcionGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
