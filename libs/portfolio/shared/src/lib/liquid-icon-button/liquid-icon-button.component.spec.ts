import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidIconButtonComponent } from './liquid-icon-button.component';

describe('LiquidIconButtonComponent', () => {
  let component: LiquidIconButtonComponent;
  let fixture: ComponentFixture<LiquidIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidIconButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiquidIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
