import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { AddItemComponent } from './AddItem/add-item.component';
import { EditItemComponent } from './EditItem/edit-item.component';

import { GetInventoryService } from './Services/get-inventory.service';
import { FindItemService } from './Services/find-item.service';
import { AddItemService } from './Services/add-item.service';
import { DeleteItemService } from './Services/delete-item.service';
import { EditItemService } from './Services/edit-item.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [GetInventoryService, AddItemService, DeleteItemService, FindItemService, EditItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
