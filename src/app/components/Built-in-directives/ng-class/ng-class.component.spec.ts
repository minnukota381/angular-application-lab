import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassComponent } from './ng-class.component';

describe('NgClassComponent', () => {
  let component: NgClassComponent;
  let fixture: ComponentFixture<NgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
