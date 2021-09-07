import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/item/item.model';
import { ItemService } from 'src/app/item/service/item.service';

@Component({
  selector: 'app-item-adicionar',
  templateUrl: './item-adicionar.component.html',
  styleUrls: ['./item-adicionar.component.scss']
})
export class ItemAdicionarComponent implements OnInit {

  item: Item = {
    nome: ''
  }

  public formCadastro: FormGroup = this.formBuilder.group({
    nome: ["", Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    
  }

  salvar(){
    if(this.formCadastro.valid){

      //console.log(this.formCadastro.value.nome);
      this.item.nome = this.formCadastro.value.nome;

      //this.novoItem.nome = this.formCadastro.value.nome;
      this.itemService.createItem(this.item).subscribe(
       novoItem =>{
        this.router.navigate(['/items']);
       },
       error => {
         alert("Erro ao cadastrar item " + JSON.stringify(error));
       }

      );
    }
  }

}
