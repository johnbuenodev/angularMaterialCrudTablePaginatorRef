import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item/item.model';
import { ItemService } from 'src/app/item/service/item.service';

@Component({
  selector: 'app-item-editar',
  templateUrl: './item-editar.component.html',
  styleUrls: ['./item-editar.component.scss']
})

export class ItemEditarComponent implements OnInit {
  

  item: Item = {
    nome: ''
  }

  formCadastro: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private itemService: ItemService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data["item"];
    let nome = this.item.nome;
    let id = this.item.id;
    this.formCadastro = this.formBuilder.group({
      id: [id],
      nome: [nome, Validators.required]
    })
  }

  editar(){
    if(this.formCadastro?.valid){
      console.log(this.formCadastro.value.nome);
      this.item.id = this.formCadastro.value.id;
      this.item.nome = this.formCadastro.value.nome;
      
      //this.novoItem.nome = this.formCadastro.value.nome;
      this.itemService.updateItem(this.item).subscribe(
       novoItem =>{
        this.router.navigate(['items']);
       },
       error => {
         alert("Erro ao cadastrar item " + JSON.stringify(error));
       }

      );
    }
  }

}
