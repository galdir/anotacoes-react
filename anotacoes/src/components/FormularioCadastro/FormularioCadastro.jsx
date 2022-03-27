import React, { Component } from "react";

import "./estilo.css"

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
  }
  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
    //console.log(this.titulo);
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _hadleMudancaCategoria(e) {
    e.stopPropagation();
    this.categoria = e.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
    //console.log("uma nova nota foi criada com o titulo:\" "+ this.titulo +" e o texto: "+ this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}>
        <select
          onChange={this._hadleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>{this.categoria}</option>
          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;