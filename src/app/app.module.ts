import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import { ShareComponent } from './share/share.component';
import { RouterModule, Routes } from '@angular/router';
import { LoveItComponent } from './love-it/love-it.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


const routes: Routes = [
  { path: 'share', component: ShareComponent },
  { path: 'main', component: MainBodyComponent },
  { path: 'loveit', component: LoveItComponent},
  { path: '**', component: MainBodyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    MainBodyComponent,
    ShareComponent,
    LoveItComponent,
    ItemDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
