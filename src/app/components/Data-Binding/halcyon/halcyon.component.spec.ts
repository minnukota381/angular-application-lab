import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalcyonComponent } from './halcyon.component';

describe('HalcyonComponent', () => {
  let component: HalcyonComponent;
  let fixture: ComponentFixture<HalcyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalcyonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalcyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
