import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsParticipanteDComponent } from './form-ins-participante-d.component';

describe('FormInsParticipanteDComponent', () => {
  let component: FormInsParticipanteDComponent;
  let fixture: ComponentFixture<FormInsParticipanteDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsParticipanteDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInsParticipanteDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
