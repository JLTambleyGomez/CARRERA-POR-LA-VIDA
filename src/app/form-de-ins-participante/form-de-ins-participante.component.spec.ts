import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeInsParticipanteComponent } from './form-de-ins-participante.component';

describe('FormDeInsParticipanteComponent', () => {
  let component: FormDeInsParticipanteComponent;
  let fixture: ComponentFixture<FormDeInsParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeInsParticipanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeInsParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
