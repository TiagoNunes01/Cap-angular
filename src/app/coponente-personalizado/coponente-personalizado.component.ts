import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coponente-personalizado',
  templateUrl: './coponente-personalizado.component.html',
  styleUrls: ['./coponente-personalizado.component.css']
})
export class CoponentePersonalizadoComponent {

  @Input() nome = ''
  @Input() sobrenome = ''

}
