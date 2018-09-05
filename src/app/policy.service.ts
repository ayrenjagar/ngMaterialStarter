import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import {IPosts} from "./iposts";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private _postsURL = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }

  getUsers() {
    return 'Test';
  }

  getPosts(): Observable<IPosts[]> {
    return this.http
        .get(this._postsURL)
        .pipe(
          map((response:Response) => { return <IPosts[]>response.json(); }),
          catchError(this.handleError)
      ) 
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
