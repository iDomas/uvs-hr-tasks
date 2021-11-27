import { Hourly } from './hourly';
import { Currently } from "./currently";
import { Daily } from './daily';

export class Forecast {
  currently: Currently;
  hourly: Hourly
  daily: Daily


  constructor(currently: Currently, hourly: Hourly, daily: Daily) {
    this.currently = currently;
    this.hourly = hourly
    this.daily = daily
  }
}
