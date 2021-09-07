import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAdicionarComponent } from './componente/item-adicionar/item-adicionar.component';
import { itemAdicionarRoutingModule } from './item-adicionar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';




@NgModule({
  declarations: [
    ItemAdicionarComponent,
  ],
  imports: [
    CommonModule,
    itemAdicionarRoutingModule,
    ReactiveFormsModule,
    AngularmaterialModule
  ]
})
export class ItemAdicionarModule { }
