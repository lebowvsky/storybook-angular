import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloaxButtonComponent } from './floax-button.component';

describe('FloaxButtonComponent', () => {
  let component: FloaxButtonComponent;
  let fixture: ComponentFixture<FloaxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloaxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloaxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
