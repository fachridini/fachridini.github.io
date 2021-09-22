window.onload = function() {
  new CountdownScript().init();
}

class CountdownScript {
  constructor() {
    this.element = document.querySelector('.countdown-time');

    this.days = this.element.getElementsByClassName('days')[0];
    this.hours = this.element.getElementsByClassName('hours')[0];
    this.mins = this.element.getElementsByClassName('mins')[0];
    this.secs = this.element.getElementsByClassName('secs')[0];

    this.dDay = new Date(2021, 9, 17, 7, 0, 0);
  }

  init() {
    if(this.validTime()) {
      this.calculatePerSecond();
    }
  }

  validTime() {
    return this.dDay > Date.now();
  }

  calculatePerSecond() {
    this.onSecondInterval();

    this.secondInterval = setInterval(function () {
      this.onSecondInterval();
    }.bind(this), 1000);
  }

  onSecondInterval(secs) {
    var distance = this.dDay - Date.now();

    var countDay = Math.floor(distance / (1000 * 60 * 60 * 24));
    var countHour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var countMinute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var countSecond = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      return this.endCountDown();
    }

    this.days.innerHTML = countDay;
    this.hours.innerHTML = countHour;
    this.mins.innerHTML = countMinute;
    this.secs.innerHTML = countSecond;
  }

  endCountDown() {
    this.days.innerHTML = 0;
    this.hours.innerHTML = 0;
    this.mins.innerHTML = 0;
    this.secs.innerHTML = 0;

    clearInterval(this.secondInterval);
  }
}
