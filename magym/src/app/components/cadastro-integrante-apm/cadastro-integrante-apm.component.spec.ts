import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIntegranteApmComponent } from './cadastro-integrante-apm.component';

describe('CadastroIntegranteApmComponent', () => {
  let component: CadastroIntegranteApmComponent;
  let fixture: ComponentFixture<CadastroIntegranteApmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroIntegranteApmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroIntegranteApmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
