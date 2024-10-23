import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyHelcyService {

  constructor() { }

  // myHelcyVar:string="Hello, Helcy!"

  getUpHelcy() {
    return [
      { id: 1, name: 'Helcy' },
      { id: 2, name: 'Minnu' },
      { id: 3, name: 'Neptune' }
    ]
  }
}
