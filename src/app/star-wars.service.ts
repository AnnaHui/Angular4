import { Injectable } from '@angular/core';

import { LogService } from './log.service';

import { Http, Response } from '@angular/http';

import { Subject } from 'rxjs/Subject';

@Injectable()

export class StarWarsService {

  private characters = [
    { name: 'Anna Liu', side: ''},
    { name: 'Jerry Woo', side: ''},
  ];

  private logservice: LogService;
  http: Http;

  // Rxjs
  charactersChange = new Subject<void>();

  constructor( logservice: LogService, http: Http ) {
    this.logservice = logservice;
    this.http = http;
  }


  fetchCharacters() {
    this.http.get('https://swapi.co/api/people/').subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }


  getCharacters(chosenList) {

    if ( chosenList === 'all' ) {
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.charactersChange.next();
    this.logservice.writeLog('Changeed side of ' + charInfo.name + ', new side :' + charInfo.side );

  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });

    if ( pos !== -1 ) {
      return;
    }

    const newChar = { name : name, side: side};
    this.characters.push(newChar);
  }


}
