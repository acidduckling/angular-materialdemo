import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Beginner', selected: false },
    { name: 'Intermediate', selected: false },
    { name: 'Advanced', selected: false },
  ];

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];
  color = 2;

  isChecked = true;

  onChange($event) {
    console.log($event);
  }

  selectCategory(category) {
    this.categories
      .filter(c => c !== category)
      .forEach(c => c.selected = false);

    category.selected = !category.selected;
  }
}
