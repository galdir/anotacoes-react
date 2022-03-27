import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas"
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css"

class App extends Component {


  constructor() {
    super();
    //this.notas=[];
    this.state = {
      notas: [],
      categorias: ["Trabalho", "Esportes"]
      //categorias: []
    }

  }

  criarNota(titulo, texto, categoria) {
    //console.log("uma nova nota foi criada com o titulo:\" "+ titulo +" e o texto: "+ texto)
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    //this.notas.push(novaNota);
    //console.log(this.notas.length);
    //this.setState({
    //  n:this.notas
    //});
    this.setState(novoEstado);

  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    
    /*this.setState({
      notas: arrayNotas
    });
    */
    //console.log("deletar");

  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado={...this.state, categorias: novoArrayCategorias}
    this.setState(novoEstado);
  }

  render() {
    return (
      <section>
        <header><h1>Meu app react</h1></header>
        <section className="conteudo">
          <FormularioCadastro 
            criarNota={this.criarNota.bind(this)} 
            categorias={this.state.categorias}
            />
          <main className="conteudo-principal">
            <ListaDeCategorias 
              categorias={this.state.categorias}
              adicionarCategoria={this.adicionarCategoria.bind(this)}
              />
            <ListaDeNotas
              notas={this.state.notas}
              apagarNota={this.deletarNota.bind(this)}
            />
          </main>
        </section>
      </section>
    );

  }

}

export default App;
