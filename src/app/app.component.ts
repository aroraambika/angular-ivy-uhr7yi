import { Component, VERSION } from '@angular/core';
// import inputData from './records.json';
interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isMale: boolean = true;
  isFemale: boolean = true;

  checkedMale(event) {
    console.log(this.isMale);
    if (event.target.checked) {
      this.filterData.filter(x => x.gender === 'Male');
    } else {
      this.filterData = this.data;
    }
  }

  checkedFemale(event) {}
  //   if (!this.isFemale) {
  //     const index = this.filterData.findIndex(x => x.gender === 'Female');
  //     if (index != undefined) this.filterData.splice(index, 1);
  //   } else {
  //     this.filterData = this.data;
  //   }
  // }

  data: Person[] = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];
  filterData: Person[] = this.data;
}
