import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-chamado',
  templateUrl: './cadastro-chamado.component.html',
  styleUrls: ['./cadastro-chamado.component.css']
})
export class CadastroChamadoComponent implements OnInit {

  @Input()
  formChamado: FormGroup;
  formOcorrencia: FormGroup;

  createForm() {
    this.formChamado = this.formBuilder.group({
      id: [""],
      nome: [""],
      email: [""],
      ocorrencia: [[]],
    })

    this.formOcorrencia = this.formBuilder.group({
      id: [""],
      lab: [""],
      data: [""],
      descricao: [""],
    })
  }

  ok() {
    console.log("ok")
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
    this.formOcorrencia.reset();
    console.log("Ocorrecia add");
  }

  constructor(
    private formBuilder: FormBuilder //Variavel formulario
  ) { }

  ngOnInit() {
    this.createForm();
  }

}
