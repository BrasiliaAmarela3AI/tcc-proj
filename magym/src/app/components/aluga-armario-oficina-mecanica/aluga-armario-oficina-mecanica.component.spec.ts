import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugaArmarioOficinaMecanicaComponent } from './aluga-armario-oficina-mecanica.component';

describe('AlugaArmarioOficinaMecanicaComponent', () => {
  let component: AlugaArmarioOficinaMecanicaComponent;
  let fixture: ComponentFixture<AlugaArmarioOficinaMecanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlugaArmarioOficinaMecanicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlugaArmarioOficinaMecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
