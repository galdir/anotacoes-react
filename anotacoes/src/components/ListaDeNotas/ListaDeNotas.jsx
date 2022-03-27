import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css"

//export default class ListaDeNotas extends Component {
class ListaDeNotas extends Component {

    //construtor desnecessario pois só faz o que é automatico
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="lista-notas">
                {/* {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {*/}
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                indice={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                texto={nota.texto}
                                categoria={nota.categoria}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;