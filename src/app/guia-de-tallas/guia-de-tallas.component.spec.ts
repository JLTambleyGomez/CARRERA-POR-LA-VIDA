import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaDeTallasComponent } from './guia-de-tallas.component';

describe('GuiaDeTallasComponent', () => {
  let component: GuiaDeTallasComponent;
  let fixture: ComponentFixture<GuiaDeTallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaDeTallasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuiaDeTallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
