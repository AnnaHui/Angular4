import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';
import { StarWarsService } from './star-wars.service';

// npm install @types/lodash and hiddne this import, then add import { random } from 'lodash';;
// import 'lodash';


// npm install @types/lodash;
// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: [`
  //   h3 {
  //     color: red;
  //   }
  // `],
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  // title = 'Angular App';
  number = 0;

  rootState = 'initComponent';
  rootItems = ['Apple', 'Bananas', 'Cherries'];



  swService: StarWarsService;
  constructor( swService: StarWarsService ) {
    this.swService = swService;
  }

  ngOnInit() {
    this.swService.fetchCharacters();
  }

  onIncrease() {
    this.number = random(1, 10);
  }

  onLoadStateChange(newStates) {
    this.rootState = newStates;
  }

  onItemsChange(newItems) {
    this.rootItems.push(newItems);
    console.log(this.rootItems);
  }

}










































// rootLoadState = 'loadingAppComponent';

//   onLoadStateChange(newLoadState) {
//     this.rootLoadState = newLoadState;
//   }
