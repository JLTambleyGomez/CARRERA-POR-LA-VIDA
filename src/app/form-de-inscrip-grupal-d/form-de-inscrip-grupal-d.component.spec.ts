import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeInscripGrupalDComponent } from './form-de-inscrip-grupal-d.component';

describe('FormDeInscripGrupalDComponent', () => {
  let component: FormDeInscripGrupalDComponent;
  let fixture: ComponentFixture<FormDeInscripGrupalDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeInscripGrupalDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeInscripGrupalDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
