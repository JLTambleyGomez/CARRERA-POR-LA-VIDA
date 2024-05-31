import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeInscEquipoDComponent } from './form-de-insc-equipo-d.component';

describe('FormDeInscEquipoDComponent', () => {
  let component: FormDeInscEquipoDComponent;
  let fixture: ComponentFixture<FormDeInscEquipoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeInscEquipoDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDeInscEquipoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
