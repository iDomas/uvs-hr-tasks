import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPaneComponent } from './weather-pane.component';

describe('WeatherPaneComponent', () => {
  let component: WeatherPaneComponent;
  let fixture: ComponentFixture<WeatherPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
