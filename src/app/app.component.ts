import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  // tslint:disable:max-line-length
  // the total
  finalArray = [
    {
      title: 'Episode I - one',
      position: 0
    },
    {
      title: 'Episode II - two',
      position: 1
    },
    {
      title: 'Episode III - three',
      position: 2
    },
    {
      title: 'Episode IV - four',
      position: 3
    },
    {
      title: 'Episode V - five',
      position: 4
    },
    {
      title: 'Episode VI - six',
      position: 5
    },
    {
      title: 'Episode VII - seven',
      position: 6
    },
    {
      title: 'Episode VIII - eight',
      position: 7
    }
  ];

  movies = JSON.parse(JSON.stringify(this.finalArray)).splice(2);

  fixMovies = JSON.parse(JSON.stringify(this.finalArray)).splice(0,2);
  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.finalArray = this.fixMovies.concat(this.movies);
    this.finalArray.map((each, index) => each.position = index);
    console.log(this.finalArray);
  }
}
