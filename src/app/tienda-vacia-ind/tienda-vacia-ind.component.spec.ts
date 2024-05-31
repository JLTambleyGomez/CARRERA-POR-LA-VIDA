import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaVaciaIndComponent } from './tienda-vacia-ind.component';

describe('TiendaVaciaIndComponent', () => {
  let component: TiendaVaciaIndComponent;
  let fixture: ComponentFixture<TiendaVaciaIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaVaciaIndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiendaVaciaIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
