import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dining } from './dining';

describe('Dining', () => {
  let component: Dining;
  let fixture: ComponentFixture<Dining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
