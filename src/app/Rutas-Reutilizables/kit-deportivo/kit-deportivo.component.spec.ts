import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitDeportivoComponent } from './kit-deportivo.component';

describe('KitDeportivoComponent', () => {
  let component: KitDeportivoComponent;
  let fixture: ComponentFixture<KitDeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitDeportivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KitDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
