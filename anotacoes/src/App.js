import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas"
import "./assets/App.css"

class App extends Component {

  render() {
    return (
      <section>
        <header><h1>Meu app react</h1></header>
        <section className="conteudo">
          <FormularioCadastro />
          <ListaDeNotas />
        </section>
      </section>
    );

  }

}

export default App;
