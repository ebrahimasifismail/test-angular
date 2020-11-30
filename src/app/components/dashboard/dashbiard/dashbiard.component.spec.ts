import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbiardComponent } from './dashbiard.component';

describe('DashbiardComponent', () => {
  let component: DashbiardComponent;
  let fixture: ComponentFixture<DashbiardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbiardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbiardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
