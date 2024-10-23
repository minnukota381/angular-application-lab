import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelcyComponent } from './my-helcy.component';

describe('MyHelcyComponent', () => {
  let component: MyHelcyComponent;
  let fixture: ComponentFixture<MyHelcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHelcyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHelcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
