import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main10 } from './main10';

describe('Main10', () => {
  let component: Main10;
  let fixture: ComponentFixture<Main10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
