import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasPatrocinadoresComponent } from './preguntas-patrocinadores.component';

describe('PreguntasPatrocinadoresComponent', () => {
  let component: PreguntasPatrocinadoresComponent;
  let fixture: ComponentFixture<PreguntasPatrocinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasPatrocinadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreguntasPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
