import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Constructor: No dependencies required here for now.
  constructor() {}

  // getData method: This returns a static list of data (an array of objects with id and name).
  // In a real application, this would likely be replaced by an API call or dynamic data.
  getData() {
    return [
      { id: 1, name: 'Jenny' },
      { id: 2, name: 'Minnu' },
      { id: 3, name: 'Neptune' }, // NeptunE, that's me ;)
    ];
  }
}
