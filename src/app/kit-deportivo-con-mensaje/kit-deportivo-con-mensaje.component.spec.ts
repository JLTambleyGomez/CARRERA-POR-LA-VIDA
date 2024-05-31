import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitDeportivoConMensajeComponent } from './kit-deportivo-con-mensaje.component';

describe('KitDeportivoConMensajeComponent', () => {
  let component: KitDeportivoConMensajeComponent;
  let fixture: ComponentFixture<KitDeportivoConMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitDeportivoConMensajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitDeportivoConMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
