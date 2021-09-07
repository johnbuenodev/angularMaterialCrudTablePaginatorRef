import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/componente/home/home.component';
import { ItemComponent } from './item/componente/item/item.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'items', component: ItemComponent},
{path:'item/cadastrar', loadChildren: () => import('./itemAdicionar/item-adicionar.module').then(m => m.ItemAdicionarModule)},
{path:'item/editar/:id', loadChildren: () => import('./itemEditar/item-editar.module').then(m => m.ItemeditarModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
