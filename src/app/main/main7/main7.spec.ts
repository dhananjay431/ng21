import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main7 } from './main7';

describe('Main7', () => {
  let component: Main7;
  let fixture: ComponentFixture<Main7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
