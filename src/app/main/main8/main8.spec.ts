import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main8 } from './main8';

describe('Main8', () => {
  let component: Main8;
  let fixture: ComponentFixture<Main8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
