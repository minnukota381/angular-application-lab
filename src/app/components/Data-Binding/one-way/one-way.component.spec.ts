import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayComponent } from './one-way.component';

describe('OneWayComponent', () => {
  let component: OneWayComponent;
  let fixture: ComponentFixture<OneWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneWayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
