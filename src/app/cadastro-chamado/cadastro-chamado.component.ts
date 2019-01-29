import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';

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
    let { lab, descricao } = this.formOcorrencia.controls
    if (!this.formOcorrencia.valid) {
      if (!lab.valid) {
        this.mensagem.error('Selecione o laboratorio', 'Erro');
      }
      if (!descricao.valid) {
        this.mensagem.error('Informe o problema no campo descrição', 'Erro');
      }
    }
    else {
      this.ocorrecias.push(
        {
          id: 42,
          lab: this.formOcorrencia.value.lab,
          descricao: this.formOcorrencia.value.descricao,
        }
      )
      this.mensagem.info('Ocorrencia cadastrada', 'Sucesso!');
      console.log(this.ocorrecias);
      this.formOcorrencia.reset();
      console.log("Ocorrecia add ");
    }

  }

  dellOcorrencia(oc) {

    //   const modalRef = this.modalService.open(DialogAlertComponent);
    //   modalRef.componentInstance.titulo = 'Atenção';
    //   modalRef.componentInstance.corpo = 'Realmente deseja excluir a ocorrencia?';
    //   modalRef.componentInstance.btnpositivo = 'SIM';
    //   modalRef.componentInstance.btnnegativo = 'NÃO';

    //   modalRef.result.then((result) => {
    //     if (result) {
    //       const index: number = this.ocorrecias.indexOf(oc);

    //       if (index !== -1) {
    //         this.ocorrecias.splice(index, 1);
    //       }
    //       this.mensagem.success('Ocorrencia deletada', 'Sucesso!');
    //       console.log("ocorrencia deletada")
    //     }
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }

    const index: number = this.ocorrecias.indexOf(oc);
    if (index !== -1) {
      this.ocorrecias.splice(index, 1);
    }
    this.mensagem.error('Ocorrencia deletada', 'Sucesso!');
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


  ngOnInit() {
    this.createForm();
  }
  
  constructor(
    private formBuilder: FormBuilder, //Variavel formulario
    private mensagem: ToastrService,
    private modalService: NgbModal
  ) { }
}
