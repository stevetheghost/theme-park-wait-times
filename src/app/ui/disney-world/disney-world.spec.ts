import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyWorld } from './disney-world';

describe('DisneyWorld', () => {
  let component: DisneyWorld;
  let fixture: ComponentFixture<DisneyWorld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisneyWorld]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisneyWorld);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
