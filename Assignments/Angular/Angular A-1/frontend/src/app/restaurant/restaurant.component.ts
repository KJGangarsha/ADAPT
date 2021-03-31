import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  template: `
  <h3>
  Restaurant List
  </h3>
  <ul class="items">
  <li *ngFor="let Restaurant of RestaurantComponent">
  <span class="badge">{{Restaurant.id}}</span> {{Restaurant.name}}
  </li>
  </ul>
  `,
  styles: [
  ]
})


export class RestaurantComponent implements OnInit {

  RestaurantComponent = [
    {"id": 1, "name": "Spicy Hub"},
    {"id": 2, "name": "Harith"}, 
    {"id": 3, "name": "Shreya"},
    {"id": 4, "name": "Hangouts"},
    {"id": 5, "name": "Cream Stone"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
