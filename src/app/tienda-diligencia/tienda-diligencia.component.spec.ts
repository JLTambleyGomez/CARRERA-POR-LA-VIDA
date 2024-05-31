import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDiligenciaComponent } from './tienda-diligencia.component';

describe('TiendaDiligenciaComponent', () => {
  let component: TiendaDiligenciaComponent;
  let fixture: ComponentFixture<TiendaDiligenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaDiligenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiendaDiligenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
