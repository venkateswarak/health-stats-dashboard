import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStatisticsComponent } from './state-statistics.component';

describe('StateStatisticsComponent', () => {
  let component: StateStatisticsComponent;
  let fixture: ComponentFixture<StateStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
