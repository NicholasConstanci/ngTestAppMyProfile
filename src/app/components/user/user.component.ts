import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  isListVisible: boolean;
  constructor() {
    console.log('constructor ran!');
  }

  ngOnInit() {
    console.log('ngOnInit ran!');

    this.name = 'Nicholas';
    this.age = 23;
    this.email = 'nicholasconstanci@outlook.com';
    this.address = {
      street: '--REDACTED--',
      city: 'Cotia',
      state: 'SP'
      };
      this.hobbies = ['Writing code', 'Playing videogames', 'Watching cartoons and anime', 'Studying'];
  }

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}
