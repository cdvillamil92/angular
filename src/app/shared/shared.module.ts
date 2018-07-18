import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DayscriptComponent } from './dayscript/dayscript.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    DayscriptComponent
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
