import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NewItem } from '../AddItem/add-item.component';
import { FindItemService } from '../Services/find-item.service';
import { EditItemService } from '../Services/edit-item.service';


@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.component.html'
})

export class EditItemComponent implements OnInit {
  _editItem = new NewItem("", 0, 0, "");
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute,
    private _findItemService: FindItemService,
    private _editItemService: EditItemService) {

  }
   async ngOnInit() {
    let ID = await this._activatedRoute.snapshot.params['ID_ItemToEdit'];
    await this._findItemService.FindItem(ID)
      .subscribe(result =>
      {
        this._editItem = JSON.parse((JSON.parse(JSON.stringify(result)))._body);
      },
      error => console.error(error));
  }
   async UpdateItem() {
     if (confirm("Are you sure you want to save these changes?")) {
       await this._editItemService.EditItem(this._editItem)
         .toPromise()
         .then(() => {
           this._router.navigate(['/home']);
         });
     }
    
   }
}
