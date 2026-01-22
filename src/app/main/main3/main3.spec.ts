import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main3 } from './main3';

describe('Main3', () => {
  let component: Main3;
  let fixture: ComponentFixture<Main3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
