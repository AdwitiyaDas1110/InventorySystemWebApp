import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AddItemService } from '../Services/add-item.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html'
})

export class AddItemComponent{
  _newItem: any;
  inventory: any;
  constructor(private _addItemService: AddItemService, private _router: Router) {
    this._newItem = new NewItem("", 0, 0, "");

  }
  SaveItem() {
    let _confirm = confirm("Are you sure you want to add the item?");
    if (_confirm == true) {
      this._addItemService.AddItem(this._newItem).toPromise().then(() => {
        this._router.navigate(['/home']);
      });
      
    }
  }

}
export class NewItem {
  constructor(
    public Name: string,
    public Price: number,
    public Quantity: number,
    public Type: string) {
  }

}
