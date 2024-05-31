import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaVaciaEquipoComponent } from './tienda-vacia-equipo.component';

describe('TiendaVaciaEquipoComponent', () => {
  let component: TiendaVaciaEquipoComponent;
  let fixture: ComponentFixture<TiendaVaciaEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaVaciaEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiendaVaciaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
