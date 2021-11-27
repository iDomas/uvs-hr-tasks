import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  x = undefined;
  t = undefined;
  result = 0;

  resetX(): void {
    this.x = undefined;
    this.calculateResult();
  }

  resetT(): void {
    this.t = undefined;
    this.calculateResult();
  }

  calculateResult(): void {
    if (this.x === undefined) {
      this.result = 0;
      return;
    }
    if (this.t === undefined) {
      this.result = 0;
      return;
    }
    this.result = Number(this.x) * Number(this.t)
  }
}
