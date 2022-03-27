import React, { Component } from 'react';
import "./estilo.css";
//import deleteSVG from "../../assets/delete_black_24dp.svg";
import {ReactComponent as DeleteSVG} from "../../assets/delete_black_24dp.svg";

class CardNota extends Component {

    apagarNota(){
        const indice=this.props.indice;
        this.props.apagarNota(indice);
    }

    render() { 
        return (
            <section className='card-nota'>
                <header className='card-nota_cabecalho'>
                    <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
                    {/*<img src={deleteSVG} /> */}
                    <DeleteSVG onClick={
                        /*()=>console.log("deletar")*/
                        this.apagarNota.bind(this)
                        }/>
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className='card-nota_texto'>{this.props.texto}</p>
            </section>
        );
    }
}
 
export default CardNota;
