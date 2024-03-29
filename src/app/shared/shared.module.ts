import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HeaderComponent} from './components/header/header.component';
import {PanelComponent} from './components/panel/panel.component';
import {ListComponent} from './components/list/list.component';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MapComponent} from './components/map/map.component';
import {MatButtonModule} from '@angular/material/button';
import {ButtonComponent} from './components/button/button.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";

const ELEMENTS = [
  HeaderComponent,
  PanelComponent,
  ListComponent,
  MapComponent,
  ButtonComponent
];

@NgModule({
  declarations: [...ELEMENTS],
    imports: [
      CommonModule,
      HttpClientModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatListModule,
      MatProgressBarModule,
      MatGridListModule,
      MatButtonModule,
      MatSnackBarModule,
      MatMenuModule,
      RouterModule
    ],
  exports: [...ELEMENTS]
})
export class SharedModule { }
