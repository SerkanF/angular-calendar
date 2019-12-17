import { Component, OnInit } from '@angular/core';

const DAYS = {
  0 : {
    position : 0,
    label : "Dimanche",
    value : null
  },
  1 : {
    position : 1,
    label : "Lundi",
    value : null
  },
  2 : {
    position : 2,
    label : "Mardi",
    value : null
  },
  3 : {
    position : 3,
    label : "Mercredi",
    value : null
  },
  4 : {
    position : 4,
    label : "Jeudi",
    value : null
  },
  5 : {
    position : 5,
    label : "Vendredi",
    value : null
  },
  6 : {
    position : 6,
    label : "Samedi",
    value : null
  },
};

const ZONES = {
  1 : {
    start : "8am",
    end : "9am"
  },
  2 : {
    start : "9am",
    end : "10am"
  },
  3 : {
    start : "10am",
    end : "11am"
  },
  4 : {
    start : "11am",
    end : "12am"
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  now : Date;
  years : number[] = [];
  months : any[] = [];

  grillDays = null;

  days;
  firstDay;

  yearSelected;
  monthSelected;

  currentDate;

  constructor() {

  }

  ngOnInit() {
    
    let self = this;

    self.now = new Date();

    self.initYears();
    self.initMonths();

    self.yearSelected = self.years[0];
    self.monthSelected = self.months[0];

    self.onChange();

  }

  changeDay(day) {

    this.currentDate = day.value;

  }

  onChange() {

    let self = this;

    self.days = new Date(self.yearSelected, self.monthSelected.value, 0).getDate()
    self.firstDay = new Date(self.yearSelected, self.monthSelected.value).getDay();

    self.updateGrill();

  }

  updateGrill() {

    let self = this;

    this.grillDays = [];

    let positionDay = self.firstDay;

    if (self.firstDay == 0) {
      this.grillDays.push(DAYS[1]);
      this.grillDays.push(DAYS[2]);
      this.grillDays.push(DAYS[3]);
      this.grillDays.push(DAYS[4]);
      this.grillDays.push(DAYS[5]);
      this.grillDays.push(DAYS[6]);
    } else if (self.firstDay != 1) {
      for (let i = (self.firstDay -1 ); i >= 1 ; i--) {
        let tmp = {...DAYS[i]};
        this.grillDays.push(tmp);
      }
    }

    for (let i = 1; i <= self.days; i++) {

      let tmp = {...DAYS[positionDay]}

      tmp.value = new Date(self.yearSelected, self.monthSelected.value, i);
      
      this.grillDays.push(tmp);

      if (positionDay == 6) {
        positionDay = 0;
      } else {
        positionDay++;
      }
      
    }

    if (this.grillDays.length < 42) {

      let rest = 42 - this.grillDays.length;

      for (let i = 1; i <= rest; i++) {
        
        let tmp = {...DAYS[positionDay]}
        tmp.value = null;
        this.grillDays.push(tmp);

        if (positionDay == 6) {
          positionDay = 0;
        } else {
          positionDay++;
        }

      }
    }

  }


  initMonths() {

    this.months = [
      {
        value : 0,
        label : "Jan"
      },
      {
        value : 1,
        label : "Fev"
      },
      {
        value : 2,
        label : "Mars"
      },
      {
        value : 3,
        label : "Avril"
      },
      {
        value : 4,
        label : "Mai"
      },
      {
        value : 5,
        label : "Juin"
      },
      {
        value : 6,
        label : "Juillet"
      },
      {
        value : 7,
        label : "Aout"
      },
      {
        value : 8,
        label : "Septembre"
      },
      {
        value : 9,
        label : "Octobre"
      },
      {
        value : 10,
        label : "Novembre"
      },
      {
        value : 11,
        label : "Décembre"
      },
    ]

  }

  initYears() {

    let self = this;

    for (let i = self.now.getFullYear() ; i < (self.now.getFullYear() + 5) ; i++) {
      self.years.push(i);
    }    

  }


}
