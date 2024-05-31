import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionEquipoComponent } from './inscripcion-equipo.component';

describe('InscripcionEquipoComponent', () => {
  let component: InscripcionEquipoComponent;
  let fixture: ComponentFixture<InscripcionEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscripcionEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
