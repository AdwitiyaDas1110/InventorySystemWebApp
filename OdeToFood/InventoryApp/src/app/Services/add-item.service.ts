import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NewItem } from '../AddItem/add-item.component';
@Injectable()
export class AddItemService {
  constructor(private _http: Http) {

  }
  AddItem(_newItem: NewItem) {
    return this._http.post('api/ApiControllers/Add',_newItem);
  }
}
