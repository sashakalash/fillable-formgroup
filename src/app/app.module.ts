import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StatusControlComponent } from './components/status-control/status-control.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [
    AppComponent,
    StatusControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
