import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main4 } from './main4';

describe('Main4', () => {
  let component: Main4;
  let fixture: ComponentFixture<Main4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
