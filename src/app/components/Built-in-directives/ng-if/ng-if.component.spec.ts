import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfComponent } from './ng-if.component';

describe('NgIfComponent', () => {
  let component: NgIfComponent;
  let fixture: ComponentFixture<NgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
