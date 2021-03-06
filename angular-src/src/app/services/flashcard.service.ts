import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { FlashcardSet } from '../flashcardset';

@Injectable()
export class FlashcardService {

  constructor(private http:Http) { }

  addFlashcardSet(flashcardSet) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/flashcardsets/create', flashcardSet, { headers: headers })
            .map(res => res.json());
  }

  getFlashcardSets(email) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get('http://localhost:3000/flashcardsets/' + email, { headers: headers })
        .map(res => res.json());
  }

  getFlashcardSet(id) {
      console.log('id = ', id);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get('http://localhost:3000/flashcardsets/set/' + id, { headers: headers })
        .map(res => res.json());
  }




}
