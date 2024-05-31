import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadSocialComponent } from './comunidad-social.component';

describe('ComunidadSocialComponent', () => {
  let component: ComunidadSocialComponent;
  let fixture: ComponentFixture<ComunidadSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunidadSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunidadSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
