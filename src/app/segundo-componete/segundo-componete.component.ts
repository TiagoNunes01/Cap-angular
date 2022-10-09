import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componete',
  templateUrl: './segundo-componete.component.html',
  styleUrls: ['./segundo-componete.component.css']
})
export class SegundoComponeteComponent {
  nome = 'joao'
  dataNascimento = '1999-55-51';
  urlImagem = "/assets/portrait-of-a-woman-by-greg-rutkowski-she-is-37-years-old-very-tall-and-slender-mix-between-medit-968009043.jpg"
  
  mostrarDataNascimento() {
    alert(`data de joao: ${this.dataNascimento}`)
  }
}
