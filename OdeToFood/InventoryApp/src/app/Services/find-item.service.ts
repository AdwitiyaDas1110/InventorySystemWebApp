import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FindItemService {
  constructor(private _http: Http) {

  }
  FindItem(id: number) {
    return this._http.get('api/ApiControllers/Find/'+ id);
  }
}
