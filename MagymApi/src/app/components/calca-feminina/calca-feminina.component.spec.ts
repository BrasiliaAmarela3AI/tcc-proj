import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcaFemininaComponent } from './calca-feminina.component';

describe('CalcaFemininaComponent', () => {
  let component: CalcaFemininaComponent;
  let fixture: ComponentFixture<CalcaFemininaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcaFemininaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcaFemininaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
