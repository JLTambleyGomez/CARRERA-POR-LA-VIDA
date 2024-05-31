import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoCaloriasComponent } from './entrenamiento-calorias.component';

describe('EntrenamientoCaloriasComponent', () => {
  let component: EntrenamientoCaloriasComponent;
  let fixture: ComponentFixture<EntrenamientoCaloriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoCaloriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrenamientoCaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
