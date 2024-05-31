import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoObjetivoComponent } from './entrenamiento-objetivo.component';

describe('EntrenamientoObjetivoComponent', () => {
  let component: EntrenamientoObjetivoComponent;
  let fixture: ComponentFixture<EntrenamientoObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoObjetivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrenamientoObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
