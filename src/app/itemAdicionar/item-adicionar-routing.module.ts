import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAdicionarComponent } from './componente/item-adicionar/item-adicionar.component';

const routes: Routes = [
{path:'', component:ItemAdicionarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemAdicionarRoutingModule { }
