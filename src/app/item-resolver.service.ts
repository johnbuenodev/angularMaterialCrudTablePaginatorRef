import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { Item } from './item/item.model';
import { ItemService } from './item/service/item.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item>{

  constructor(private itemService: ItemService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Item | Observable<Item> | Promise<Item> {
    const id = route.params["id"];
    
    if(id){
      return this.itemService.findByItembyId(id);
    } 
    
    return empty();

  }
}
