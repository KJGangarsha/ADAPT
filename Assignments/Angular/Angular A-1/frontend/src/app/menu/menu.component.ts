import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <h3>
  Menu List
  </h3>
  <ul class="items">
  <li *ngFor="let Menu of MenuComponent">
  <span class="badge">{{Menu.id}}</span> {{Menu.name}}
  </li>
  </ul>
  `,
  styles: [
  ]
})

export class MenuComponent implements OnInit {

  MenuComponent = [
    {"id": 1, "name": "Biryani"},
    {"id": 2, "name": "Noodles"}, 
    {"id": 3, "name": "Butter Chicken"},
    {"id": 4, "name": "Mandi"},
    {"id": 5, "name": "Dosa"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
