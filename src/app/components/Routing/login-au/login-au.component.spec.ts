import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuComponent } from './login-au.component';

describe('LoginAuComponent', () => {
  let component: LoginAuComponent;
  let fixture: ComponentFixture<LoginAuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
