import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaFemPretaComponent } from './camiseta-fem-preta.component';

describe('CamisetaFemPretaComponent', () => {
  let component: CamisetaFemPretaComponent;
  let fixture: ComponentFixture<CamisetaFemPretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetaFemPretaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetaFemPretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
