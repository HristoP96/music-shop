import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { IgxAvatarModule, IgxButtonGroupModule, IgxDividerModule, IgxGridModule, IgxIconModule, IgxNavbarModule, IgxTabsModule } from 'igniteui-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { NavComponent } from './nav/nav.component';

export const ROUTES: Routes = [{
  path: '',
  component: StatisticsComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [StatisticsComponent, NavComponent],
  imports: [
    CommonModule,
    IgxGridModule,
    HttpClientModule,
    IgxAvatarModule,
    IgxTabsModule,
    IgxButtonGroupModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxDividerModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [{provide: 'endPoint', useValue: 'http://localhost:8000' }, UserService]
})
export class DashboardModule { }
