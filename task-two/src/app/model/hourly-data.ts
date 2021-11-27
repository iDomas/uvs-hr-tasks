export class HourlyData {
  time: number;
  icon: string ;
  temperature: number;

  constructor(time: number, icon: string, temperature: number) {
    this.time = time;
    this.icon = icon;
    this.temperature = temperature;
  }
}
