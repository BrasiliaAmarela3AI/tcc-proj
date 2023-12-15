import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIntegranteAPMComponent } from './login-integrante-apm.component';

describe('LoginIntegranteAPMComponent', () => {
  let component: LoginIntegranteAPMComponent;
  let fixture: ComponentFixture<LoginIntegranteAPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIntegranteAPMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginIntegranteAPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
