import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMiInscripcionComponent } from './datos-mi-inscripcion.component';

describe('DatosMiInscripcionComponent', () => {
  let component: DatosMiInscripcionComponent;
  let fixture: ComponentFixture<DatosMiInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosMiInscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosMiInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
