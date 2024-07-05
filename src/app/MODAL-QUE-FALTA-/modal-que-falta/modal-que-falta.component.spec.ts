import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MODALQUEFALTAComponent } from './modal-que-falta.component';

describe('MODALQUEFALTAComponent', () => {
  let component: MODALQUEFALTAComponent;
  let fixture: ComponentFixture<MODALQUEFALTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MODALQUEFALTAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MODALQUEFALTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
