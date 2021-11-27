export class Data {
  time: number;
  icon: string ;
  temperature: number;
  temperatureMin: number;

  constructor(time: number, icon: string, temperature: number, temperatureMin: number) {
    this.time = time;
    this.icon = icon;
    this.temperature = temperature;
    this.temperatureMin = temperatureMin;
  }
}
