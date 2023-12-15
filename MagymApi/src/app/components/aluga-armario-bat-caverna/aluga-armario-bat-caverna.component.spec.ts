import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugaArmarioBatCavernaComponent } from './aluga-armario-bat-caverna.component';

describe('AlugaArmarioBatCavernaComponent', () => {
  let component: AlugaArmarioBatCavernaComponent;
  let fixture: ComponentFixture<AlugaArmarioBatCavernaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlugaArmarioBatCavernaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlugaArmarioBatCavernaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
