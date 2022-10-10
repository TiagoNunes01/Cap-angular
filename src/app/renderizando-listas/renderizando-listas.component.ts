import { Component, OnInit } from '@angular/core';
import { celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: celular[] = [
    
    {id: 1, nome: 'Celular XL', descricao: "Um celular granade", esgotado: false},
    {id: 2, nome: 'Celular Normal', esgotado: false},
    {id: 3, nome: 'Celular Mini', descricao: "Um celular pequeno", esgotado: true}


  ]

}
