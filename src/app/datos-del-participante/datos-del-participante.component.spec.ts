import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDelParticipanteComponent } from './datos-del-participante.component';

describe('DatosDelParticipanteComponent', () => {
  let component: DatosDelParticipanteComponent;
  let fixture: ComponentFixture<DatosDelParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosDelParticipanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosDelParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
