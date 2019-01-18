import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.component.html',
  styleUrls: ['./cadastro-chamado.component.css']
})
export class CadastroChamadoComponent implements OnInit {

  ocorrecias: any = []

  @Input()
  formChamado: FormGroup;
  formOcorrencia: FormGroup;

  createForm() {
    this.formChamado = this.formBuilder.group({
      id: [""],
      nome: [""],
      email: [""],
      data: [""],
      ocorrencia: [{}],
    });

    this.formOcorrencia = this.formBuilder.group({
      id: [""],
      lab: [""],
      descricao: [""],
    });
  }

  addOcorrencia() {
    this.ocorrecias.push(
      {
        id: 42,
        lab: this.formOcorrencia.value.lab,
        descricao: this.formOcorrencia.value.descricao
      }
    )

    console.log(this.ocorrecias);
    this.formOcorrencia.reset();
    console.log("Ocorrecia add");
  }

  dellOcorrencia(oc) {
    const index: number = this.ocorrecias.indexOf(oc);
    if (index !== -1) {
      this.ocorrecias.splice(index, 1);
    }
    console.log("ocorrencia deletada")
  }

  enviarChamado() {

    id: this.formChamado.value.id;
    nome: this.formChamado.value.nome;
    email: this.formChamado.value.email;
    data: this.formChamado.value.data;

    for (let index = 0; index < this.ocorrecias.length; index++) {
      this.formChamado.value.ocorrencia[index] = this.ocorrecias[index];
      console.log("ADD no array")
    }

    this.ocorrecias = [];

    console.log(this.formChamado.value);
    this.formChamado.reset();
    console.log("Chamado enviado");

  }

  constructor(
    private formBuilder: FormBuilder //Variavel formulario
  ) { }

  ngOnInit() {
    this.createForm();
  }
}
