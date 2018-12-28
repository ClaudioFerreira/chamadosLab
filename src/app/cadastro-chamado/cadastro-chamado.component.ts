import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.component.html',
  styleUrls: ['./cadastro-chamado.component.css']
})
export class CadastroChamadoComponent implements OnInit {

  chamado: any = {
    lab: '001',
    descricao: 'Teste'
  }

  constructor() { }

  ngOnInit() {
  }

}
