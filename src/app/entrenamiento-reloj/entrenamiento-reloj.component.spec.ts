import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoRelojComponent } from './entrenamiento-reloj.component';

describe('EntrenamientoRelojComponent', () => {
  let component: EntrenamientoRelojComponent;
  let fixture: ComponentFixture<EntrenamientoRelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoRelojComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrenamientoRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
