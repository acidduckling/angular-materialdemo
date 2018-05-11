import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Beginner', selected: false },
    { name: 'Intermediate', selected: false },
    { name: 'Advanced', selected: false }
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

  isLoading = false;

  constructor(private dialog: MatDialog) {
    this.isLoading = true;
    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  onChange($event) {
    console.log($event);
  }

  selectCategory(category) {
    this.categories
      .filter(c => c !== category)
      .forEach(c => (c.selected = false));

    category.selected = !category.selected;
  }

  getCourses() {
    return Observable.timer(2000);
  }

  openDialog() {
    this.dialog.open(EditCourseComponent)
      .afterClosed()
      .subscribe(result => console.log(result));

  }
}
