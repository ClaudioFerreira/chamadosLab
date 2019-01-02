import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.component.html',
  styleUrls: ['./cadastro-chamado.component.css']
})
export class CadastroChamadoComponent implements OnInit {

  provessor: any = {
    nome: 'Joao',
    email: 'joao@email.com'
  };

  ocorrencia: any = [{
    id: 1,
    lab: '001',
    descricao: 'Teste 1'
  }, {
    id: 2,
    lab: '002',
    descricao: 'Teste 2'
  }, {
    id: 3,
    lab: '003',
    descricao: 'Teste 3'
  }]

  constructor() { }

  ngOnInit() {
  }

}
