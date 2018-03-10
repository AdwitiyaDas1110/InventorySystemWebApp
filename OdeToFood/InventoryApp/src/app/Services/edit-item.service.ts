import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NewItem } from '../AddItem/add-item.component';
@Injectable()
export class EditItemService {
  constructor(private _http: Http) {

  }
  EditItem(_updatedItem: NewItem) {
    return this._http.put('api/ApiControllers/Edit', _updatedItem);
  }
}
