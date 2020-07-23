import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public formulario;
  public nome;
  public cpf;
  public nascimento;
  public email;
  public celular;
  public genero;
  public senha;
  public confirma;
  public mensagem;
  
  constructor() { }

  public formu(){
    this.formulario = this.nome;
    this.formulario = this.cpf;
    this.formulario = this.nascimento;
    this.formulario = this.email;
    this.formulario = this.celular;
    this.formulario = this.genero;
    this.formulario = this.senha;
    this.formulario = this.confirma;

    if (this.formulario == null){
      this.mensagem = "Preencha todos os dados!";
    }
    else {
      this.mensagem = "Cadastro realizado!";
    }

  }
  ngOnInit() {
  }

}
