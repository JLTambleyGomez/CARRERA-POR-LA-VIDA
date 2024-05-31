import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFromParticipanteComponent } from './feedback-from-participante.component';

describe('FeedbackFromParticipanteComponent', () => {
  let component: FeedbackFromParticipanteComponent;
  let fixture: ComponentFixture<FeedbackFromParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackFromParticipanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackFromParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
