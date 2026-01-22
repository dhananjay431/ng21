import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main5 } from './main5';

describe('Main5', () => {
  let component: Main5;
  let fixture: ComponentFixture<Main5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
