import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveterMoedasComponent } from './conveter-moedas.component';

describe('ConveterMoedasComponent', () => {
  let component: ConveterMoedasComponent;
  let fixture: ComponentFixture<ConveterMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveterMoedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveterMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
