import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main9 } from './main9';

describe('Main9', () => {
  let component: Main9;
  let fixture: ComponentFixture<Main9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
