import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from '../../item.model';
import { ItemService } from '../../service/item.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit,AfterViewInit {

  itemList : Item[] = [];

  itemList$: Observable<Item[]> | undefined;

  displayedColumns: string[] = ['id', 'nome','Editar']; //'Deletar'
  dataSource = new MatTableDataSource<Item>(this.itemList);

  pageVariable = 10;
  optionsVariable = [10,30,50];

  constructor(private itemService: ItemService, private router: Router) { }

  async ngOnInit() {
    await this.findAllItem();
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator | null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editarRegistro(value: any){
    //value: Item
    //alert("registro selecionado - " + "ID: " + value.id + " / "+ " Nome: " + value.nome);
    alert("registro selecionado - " + "ID: " + value);
    //this.router.navigate(['item/editar/',value.id]);
    this.router.navigate(['item/editar/',value]);
  }

  async deletarRegistro(value: any){
    //value: Item
    //alert("registro selecionado - " + "ID: " + value.id + " / "+ " Nome: " + value.nome);
    alert("Deletar registro selecionado - " + "ID: " + value);
    //this.router.navigate(['item/editar/',value.id]);
    await this.itemService.delete(value).subscribe();
    this.ngOnInit();
  }


  async findAllItem(){
   /*
    await this.itemService.getItems().subscribe(
      (response)=>{
       response.forEach(
         itemObj => {
           this.itemList.push(itemObj);
         }
       )
    });
     
    this.dataSource = new MatTableDataSource<Item>(this.itemList);
    console.log(this.dataSource);
    //console.log(this.itemList$); 
    */
    
    this.itemList$ = await this.itemService.getItems();
    
  }

  novoItem(){
    this.router.navigate(['item/cadastrar']);
    //alert("implementando");
  }
//8:00
}
