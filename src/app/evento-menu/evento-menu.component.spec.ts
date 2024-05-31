import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoMenuComponent } from './evento-menu.component';

describe('EventoMenuComponent', () => {
  let component: EventoMenuComponent;
  let fixture: ComponentFixture<EventoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
