import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1 } from './main1';

describe('Main1', () => {
  let component: Main1;
  let fixture: ComponentFixture<Main1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
