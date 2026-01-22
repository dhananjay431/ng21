import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main6 } from './main6';

describe('Main6', () => {
  let component: Main6;
  let fixture: ComponentFixture<Main6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
