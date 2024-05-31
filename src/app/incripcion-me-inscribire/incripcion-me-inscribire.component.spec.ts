import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncripcionMeInscribireComponent } from './incripcion-me-inscribire.component';

describe('IncripcionMeInscribireComponent', () => {
  let component: IncripcionMeInscribireComponent;
  let fixture: ComponentFixture<IncripcionMeInscribireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncripcionMeInscribireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncripcionMeInscribireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
