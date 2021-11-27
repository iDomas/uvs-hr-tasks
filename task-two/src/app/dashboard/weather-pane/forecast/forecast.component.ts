import { SkyCon } from 'src/app/class/SkyCon';
import { Component, Input, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent extends SkyCon implements AfterViewInit {

  @Input() title: string;
  @Input() componentId: number;
  @Input() date: string;
  @Input() forecastTemperature: number;
  @Input() skycon: string;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngAfterViewInit(): void {
    this.drawSkyCon(this.elementRef.nativeElement.querySelector(`#${this.title + this.componentId}`), this.skycon)

  }


}
