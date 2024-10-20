import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBindingComponent } from './signal-binding.component';

describe('SignalBindingComponent', () => {
  let component: SignalBindingComponent;
  let fixture: ComponentFixture<SignalBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
