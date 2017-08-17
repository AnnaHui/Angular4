import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()

export class StarWarsService {

  private characters = [
    { name: 'Anna Liu', side: ''},
    { name: 'Jerry Woo', side: ''},
  ];

  private logservice: LogService;

  constructor( logservice: LogService ) {
    this.logservice = logservice;
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
