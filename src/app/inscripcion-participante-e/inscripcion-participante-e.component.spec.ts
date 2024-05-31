import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionParticipanteEComponent } from './inscripcion-participante-e.component';

describe('InscripcionParticipanteEComponent', () => {
  let component: InscripcionParticipanteEComponent;
  let fixture: ComponentFixture<InscripcionParticipanteEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionParticipanteEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscripcionParticipanteEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
