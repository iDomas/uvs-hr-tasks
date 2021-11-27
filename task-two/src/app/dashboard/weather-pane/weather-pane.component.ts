import { Forecast } from '../../model/forecast';
import { WeatherApiService } from './../../weather-api.service';
import { Component, Input, ElementRef } from '@angular/core';
import { SkyCon } from 'src/app/class/SkyCon';
import * as momentjs from 'moment'

@Component({
  selector: 'app-weather-pane',
  templateUrl: './weather-pane.component.html',
  styleUrls: ['./weather-pane.component.scss']
})
export class WeatherPaneComponent extends SkyCon {

  @Input() longitude: number;
  @Input() lattitude: number;
  forecast: Forecast;
  @Input() componentId: number;
  temperature: number = 0

  constructor(private weatherApi: WeatherApiService, private elementRef: ElementRef) {
    super();
  }

  fetchWeather(): void {
    this.weatherApi.fetchWeather(this.longitude, this.lattitude).subscribe((data: Forecast) => {
      this.forecast = data;
      this.temperature = this.getTemperature(data.currently.temperature);
      this.forecast.hourly.data = this.forecast.hourly.data.slice(0, 10)

      this.forecast.daily.data = this.forecast.daily.data.slice(0, 10)
      console.log(data)
      this.drawSkyCon(this.elementRef.nativeElement.querySelector(`#canvas${this.componentId}`), data.currently.icon)
    })
  }

  getTime(timestamp: number): string {
    const momentDate = momentjs.unix(timestamp).format('HH:mm')
    return momentDate
  }

  getDate(timestamp: number): string {
    const date = momentjs.unix(timestamp).format('MM/ddd')
    return date;
  }

  getTemperature(fahrenheit: number): number {
    return parseFloat(String(((fahrenheit - 32) * 5 / 9).toFixed(2)));
  }

}
