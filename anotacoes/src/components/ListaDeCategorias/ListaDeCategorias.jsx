import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {
    state = {}

    _handleEventoInput(e) {
        //console.log(e.key)
        if (e.key == "Enter") {
            let nomeCategoria = e.target.value;
            this.props.adicionarCategoria(nomeCategoria);
            //console.log("adicionar categoria")
        }

    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}

                </ul>
                <input
                    type="text"
                    placeholder='Adicionar Categoria'
                    className='lsita-categorias_input'
                    onKeyUp={this._handleEventoInput.bind(this)}
                >

                </input>
            </section>
        );
    }
}

export default ListaDeCategorias;