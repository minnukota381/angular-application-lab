import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelcyComponent } from './helcy.component';

describe('HelcyComponent', () => {
  let component: HelcyComponent;
  let fixture: ComponentFixture<HelcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelcyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
