import {ionRangeSlider} from 'ion-rangeslider';

export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  attached() {
    $('.slider').ionRangeSlider({
      values: [15, 30, 1, 3, 6, 12, 24]
    });
  }
}
