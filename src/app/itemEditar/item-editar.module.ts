import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemEditarComponent } from './componente/item-editar/item-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { itemEditarRoutingModule } from './item-editar-routing.module';



@NgModule({
  declarations: [
    ItemEditarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    itemEditarRoutingModule,
    AngularmaterialModule
  ]
})
export class ItemeditarModule { }
