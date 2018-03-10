import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AddItemComponent } from './AddItem/add-item.component';
import { EditItemComponent } from './EditItem/edit-item.component';


export const rootRouterConfig: Routes = [

  { path: 'edit-item/:ID_ItemToEdit', component: EditItemComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }


];
