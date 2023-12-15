import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugaArmarioComponent } from './aluga-armario.component';

describe('AlugaArmarioComponent', () => {
  let component: AlugaArmarioComponent;
  let fixture: ComponentFixture<AlugaArmarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlugaArmarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlugaArmarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
