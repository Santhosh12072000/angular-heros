import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Tata Steel' },
      { id: 2, name: 'Reliance' },
      { id: 3, name: 'TCS' },
      { id: 4, name: 'Adani Power' },
      { id: 5, name: 'HDFC' },
      { id: 6, name: 'Hindustan Unilever Limited' },
      { id: 7, name: 'Nestle' },
      { id: 8, name: 'Infosys' },
      { id: 9, name: 'ITC' },
      { id: 10, name: 'Wipro' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/