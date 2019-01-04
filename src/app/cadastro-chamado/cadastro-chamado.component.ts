import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.component.html',
  styleUrls: ['./cadastro-chamado.component.css']
})
export class CadastroChamadoComponent implements OnInit {

  teste: any = [
    { id: "1"},
    { id: "2"}
  ]

  @Input()
  formChamado: FormGroup;
  formOcorrencia: FormGroup;

  createForm() {
    this.formChamado = this.formBuilder.group({
      id: [""],
      nome: [""],
      email: [""],
      ocorrencia: [[]],
    });

    this.formOcorrencia = this.formBuilder.group({
      id: [""],
      lab: [""],
      data: [""],
      descricao: [""],
    });
  }

  addOcorrencia() {
    this.formChamado.value.ocorrencia.push(
      {
        id: 10,
        lab: this.formOcorrencia.value.lab,
        data: this.formOcorrencia.value.data,
        descricao: this.formOcorrencia.value.descricao
      }
    )
    console.log(this.formChamado.value.ocorrencia);
    // this.formOcorrencia.reset();
    console.log("Ocorrecia add");
  }

  agoraVai = [{}];

  constructor(
    private formBuilder: FormBuilder //Variavel formulario
  ) { }

  ngOnInit() {
    this.createForm();
//this.formChamado.value.ocorrencia = [{id:'',lab:'101',data:'10/12/2015',descricao:'teste'}]
   
  }
}
