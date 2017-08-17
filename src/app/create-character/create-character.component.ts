import { Component, OnInit } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})


export class CreateCharacterComponent implements OnInit {

  defaultName = 'Anna, Jia Hui';

  availableSides = [
    { display: 'None', value: ''},
    { display: 'Light', value: 'light'},
    { display: 'Dark', value: 'dark'}
  ];

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submitted) {
    if ( submitted.invalid ) {
      return;
    }
    console.log(submitted);
    this.swService.addCharacter(submitted.value.name, submitted.value.side);
  }

}
