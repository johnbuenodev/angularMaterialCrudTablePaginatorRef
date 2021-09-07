import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:3000';
  private endpoint = 'items';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseUrl}/${this.endpoint}`);
  }

  delete(id: any) :Observable<void>{
    const url = `${this.baseUrl}/${this.endpoint}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  findByItembyId(id: any): Observable<Item>{
   const url = `${this.baseUrl}/${this.endpoint}/${id}`;
   return this.httpClient.get<Item>(url);
  }

  createItem(item: Item): Observable<Item>{
    const url = `${this.baseUrl}/${this.endpoint}/`;
    return this.httpClient.post<Item>(url,item);
  }

  updateItem(item: Item):Observable<Item>{
    const id = item.id;
    const url = `${this.baseUrl}/${this.endpoint}/${id}`;
    return this.httpClient.put<Item>(url,item);
  }


}
