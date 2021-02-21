import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxButtonModule, IgxCardModule, IgxIconModule, IgxInputGroupModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule } from 'igniteui-angular';
import { PurchaseService } from './purchase.service'
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { BrandsService } from './brands.service';

export const ROUTES: Routes = [{
  path: '',
  component: MainComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    ItemComponent,
    ItemListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    IgxCardModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [PurchaseService, BrandsService, {provide: 'id', useValue: Math.floor(Math.random() * (9877)) + 1 }]
})
export class ShopModule { }
