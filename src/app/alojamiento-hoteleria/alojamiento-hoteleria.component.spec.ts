import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientoHoteleriaComponent } from './alojamiento-hoteleria.component';

describe('AlojamientoHoteleriaComponent', () => {
  let component: AlojamientoHoteleriaComponent;
  let fixture: ComponentFixture<AlojamientoHoteleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlojamientoHoteleriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlojamientoHoteleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
