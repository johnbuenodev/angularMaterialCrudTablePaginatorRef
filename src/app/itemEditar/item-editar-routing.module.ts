import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolverService } from '../item-resolver.service';
import { ItemEditarComponent } from './componente/item-editar/item-editar.component';


const routes: Routes = [
{path:'', component:ItemEditarComponent,
resolve: {
  item: ItemResolverService
}

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemEditarRoutingModule { }
