import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class DeleteItemService {
  constructor(private _http: Http) {

  }
  DeleteItemFromInventory(id: any) {
    const HttpOptions = new Headers({
      'id' : id
    })
    return this._http.delete('api/ApiControllers/Delete/' + id);
  }
}
