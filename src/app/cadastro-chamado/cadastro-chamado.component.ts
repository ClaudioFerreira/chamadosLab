import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.component.html',
  styleUrls: ['./cadastro-chamado.component.css']
})
export class CadastroChamadoComponent implements OnInit {

  ocorrecias: any = [{
    id: null,
    lab: null,
    descricao: null,
  }]

  @Input()
  formChamado: FormGroup;
  formOcorrencia: FormGroup;

  createForm() {
    this.formChamado = this.formBuilder.group({
      id: [""],
      nome: [""],
      email: [""],
      data: [""],
      ocorrencia: [[]],
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
    this.formChamado.value.push(
      {
        id: null,
        nome: this.formChamado.value.nome,
        email: this.formChamado.value.email,
        data: this.formChamado.value.data,
        ocorrencia: this.ocorrecias,
      }
    )
    console.log(this.formChamado);
    console.log("Chamado enviado");

  }

  constructor(
    private formBuilder: FormBuilder //Variavel formulario
  ) { }

  ngOnInit() {
    this.createForm();
  }
}
