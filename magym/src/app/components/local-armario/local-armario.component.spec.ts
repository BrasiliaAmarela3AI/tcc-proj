import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalArmarioComponent } from './local-armario.component';

describe('LocalArmarioComponent', () => {
  let component: LocalArmarioComponent;
  let fixture: ComponentFixture<LocalArmarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalArmarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalArmarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
