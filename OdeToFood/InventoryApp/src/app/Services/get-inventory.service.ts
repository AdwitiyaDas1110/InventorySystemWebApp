import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()

export class GetInventoryService {
  constructor(private _http: Http) {

  }
  GetInventory() {
    return this._http.get('api/ApiControllers/ViewInventory');
  }
}
