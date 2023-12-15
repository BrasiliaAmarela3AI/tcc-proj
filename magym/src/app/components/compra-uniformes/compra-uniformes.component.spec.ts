import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraUniformesComponent } from './compra-uniformes.component';

describe('CompraUniformesComponent', () => {
  let component: CompraUniformesComponent;
  let fixture: ComponentFixture<CompraUniformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraUniformesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraUniformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
