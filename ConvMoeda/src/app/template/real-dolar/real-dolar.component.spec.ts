import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDolarComponent } from './real-dolar.component';

describe('RealDolarComponent', () => {
  let component: RealDolarComponent;
  let fixture: ComponentFixture<RealDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealDolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
