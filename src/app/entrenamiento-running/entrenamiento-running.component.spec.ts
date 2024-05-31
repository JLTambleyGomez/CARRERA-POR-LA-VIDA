import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoRunningComponent } from './entrenamiento-running.component';

describe('EntrenamientoRunningComponent', () => {
  let component: EntrenamientoRunningComponent;
  let fixture: ComponentFixture<EntrenamientoRunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoRunningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrenamientoRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
