import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { GetInventoryService } from '../Services/get-inventory.service';
import { DeleteItemService } from '../Services/delete-item.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public inventory: any;
  constructor(private _http: Http, private _getInventoryService: GetInventoryService,
    private _deleteItemService: DeleteItemService, private _router : Router) {

  }
  async ngOnInit() {
    
    await this._getInventoryService.GetInventory()
       .subscribe(result => {
        this.inventory = JSON.parse((JSON.parse(JSON.stringify(result)))._body);
      }, error => console.error(error));
  }

  async DeleteItem(ID_ItemToDelete: any) {

   var _confirm = confirm("Are you sure you want to delete this item?");

    if (_confirm) {
      var id = ID_ItemToDelete;
      await this._deleteItemService.DeleteItemFromInventory(ID_ItemToDelete).toPromise().then(() => {
        this._getInventoryService.GetInventory()
          .subscribe(result => {
            this.inventory = JSON.parse((JSON.parse(JSON.stringify(result)))._body);
          }, error => console.log(error));
      });
    }
  }

   EditItem(ID_ItemToEdit: any) {
     this._router.navigate(['\edit-item', ID_ItemToEdit]);
  }
}
