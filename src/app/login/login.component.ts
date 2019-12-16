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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  now : Date;
  years : number[] = [];
  months : any[] = [];

  days;
  firstDay;

  yearSelected;
  monthSelected;

  constructor() {

  }

  ngOnInit() {
    
    let self = this;

    self.now = new Date();

    self.initYears();
    self.initMonths();

    self.yearSelected = self.years[0];
    self.monthSelected = self.months[0];

  }


  initYears() {

    let self = this;

    for (let i = self.now.getFullYear() ; i < (self.now.getFullYear() + 5) ; i++) {
      self.years.push(i);
    }    

  }

  onChange() {

    let self = this;

    self.days = new Date(self.yearSelected, self.monthSelected.value + 1, 0).getDate()
    self.firstDay = new Date(self.yearSelected, self.monthSelected.value).getDay();

    console.log(this.yearSelected);
    console.log(this.monthSelected);

    console.log("First day : " + self.firstDay + ", days : " + self.days);

    self.updateGrill();

  }

  updateGrill() {

    let self = this;

    let grillDays = [

    ];

    let positionDay = self.firstDay;

    if (self.firstDay == 0) {
      grillDays.push(DAYS[1]);
      grillDays.push(DAYS[2]);
      grillDays.push(DAYS[3]);
      grillDays.push(DAYS[4]);
      grillDays.push(DAYS[5]);
      grillDays.push(DAYS[6]);
    } else if (self.firstDay != 1) {
      for (let i = (self.firstDay -1 ); i >= 1 ; i--) {
        let tmp = {...DAYS[i]};
        grillDays.push(tmp);
      }
    }

    for (let i = 1; i <= self.days; i++) {

      let tmp = {...DAYS[positionDay]}

      tmp.value = i;
      
      grillDays.push(tmp);

      if (positionDay == 6) {
        positionDay = 0;
      } else {
        positionDay++;
      }
      
    }

    console.log(grillDays);

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


}
