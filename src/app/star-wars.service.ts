import { Injectable } from '@angular/core';

import { LogService } from './log.service';

import { Http, Response } from '@angular/http';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Injectable()

export class StarWarsService {

  // private characters = [
  //   { name: 'Anna Liu', side: ''},
  //   { name: 'Jerry Woo', side: ''},
  // ];
  characters = [];

  private logservice: LogService;
  http: Http;

  // Rxjs
  charactersChange = new Subject<void>();

  constructor( logservice: LogService, http: Http ) {
    this.logservice = logservice;
    this.http = http;
  }


  fetchCharacters() {

    this.http.get('https://swapi.co/api/people/')
        .map((response: Response) => {
            const data = response.json();
            const extractedChars = data.results;
            const chars = extractedChars.map((char) => {
              return { name: char.name, side: '' };
            });
            return chars;
          }
        )
        .subscribe(
          (data) => {
            console.log(data);
            this.characters = data;
            this.charactersChange.next(); //visible in init side
          }
        );


    // const myData = {description: 'Data I want to pass, could be any kind of data/ object'};
    // this.http.post('https://swapi.co/api/people/', myData)
    //     .map(
    //       (response: Response) => {
    //         return response.json();
    //       }
    //     )
    //     .subscribe(
    //       (transformedData: any) => {
    //         console.log(transformedData);
    //       }
    //     );

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
    this.charactersChange.next(); //visible in init side
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
