import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { StarWarsService } from '../star-wars.service';





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  // @Input () characters;
  // @Output () sideAssigned = new EventEmitter<{name: string, side: string}>();
  characters = [];

  activatedRoute: ActivatedRoute;

  swService: StarWarsService;

  loadedSide = 'all';

  // Managing Subscription
  subscription;







  constructor( activatedRoute: ActivatedRoute, swService: StarWarsService ) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    // this.swService.fetchCharacters();  //move to app.component.ts
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );

    // use Rxjs and can change side
    this.subscription = this.swService.charactersChange.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );

  }

  // onSideAssigned(chartInfo) {
  //   this.sideAssigned.emit(chartInfo);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
