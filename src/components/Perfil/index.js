import React from "react";
import "./style.css"

const Perfil = () => {
    return (
      <section>
        <div className="profile">
          <div className="user">
            <picture>
              <img src="./assets/perfil5.png" alt="foto-perfil"></img>
            </picture>
            <p>Nome de usuario</p>
          </div>
          <div className="list-bio">
            <ul>
              <li>Nome:</li>
              <li>Data de nascimento:</li>
              <li>Preferências:</li>
              <li>Posse de livros: 0/5</li>
            </ul>
          </div>
          <div className="possession-books">
            <h1>Posse de livros</h1>
            <div className="hi-books">
              <div className="h-book hb1">
                <div className="divimg">
                  <img
                    src="./assets/aListaDeConvidados.jfif"
                    alt="Livro1"
                  ></img>
                </div>
              </div>
              <div className="h-book hb2">
                <div className="divimg">
                  <img src="./assets/cafeDosAnjos.jpg" alt="Livro2"></img>
                </div>
              </div>
              <div className="h-book hb3">
                <div className="divimg">
                  <img src="./assets/aMecanicaDoAmor.jfif" alt="Livro3"></img>
                </div>
              </div>
              <div className="h-book hb4">
                <div className="divimg">
                  <img src="./assets/taticasDoAmor.jpg" alt="Livro4"></img>
                </div>
              </div>
              <div className="h-book hb5">
                <div className="divimg">
                  <img
                    src="./assets/asEstrelasSempreBrilhamAcimaDasNuvensEscuras.jpg"
                    alt="Livro5"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="historic-books">
            <h1>Histórico de livros</h1>
            <div className="hi-books">
              <div className="h-book hb1">
                <div className="divimg">
                  <img
                    src="./assets/aBibliotecaDaMeiaNoite.jpg"
                    alt="Livro1"
                  ></img>
                </div>
              </div>
              <div className="h-book hb2">
                <div className="divimg">
                  <img src="./assets/aUltimaEscolha.jpg" alt="Livro2"></img>
                </div>
              </div>
              <div className="h-book hb3">
                <div className="divimg">
                  <img src="./assets/deixaNevar.jpg" alt="Livro3"></img>
                </div>
              </div>
              <div className="h-book hb4">
                <div className="divimg">
                  <img src="./assets/depoisDasBrasas.jpg" alt="Livro4"></img>
                </div>
              </div>
              <div className="h-book hb5">
                <div className="divimg">
                  <img src="./assets/eAssimQueAcaba.jpg" alt="Livro5"></img>
                </div>
              </div>
              <div className="h-book hb6">
                <div className="divimg">
                  <img
                    src="./assets/instrucoesParaDancar.jpg"
                    alt="Livro6"
                  ></img>
                </div>
              </div>
              <div className="h-book hb7">
                <div className="divimg">
                  <img src="./assets/itACoisa.jpg" alt="Livro7"></img>
                </div>
              </div>
              <div className="h-book hb8">
                <div className="divimg">
                  <img
                    src="./assets/manualDeSobrevivenciaAosGemeos.jpg"
                    alt="Livro8"
                  ></img>
                </div>
              </div>
              <div className="h-book hb9">
                <div className="divimg">
                  <img
                    src="./assets/mazeRunnerCorrerOuMorrer.jpg"
                    alt="Livro9"
                  ></img>
                </div>
              </div>
              <div className="h-book hb10">
                <div className="divimg">
                  <img
                    src="assets/mazeRunnerProvaDeFogo.jpg"
                    alt="Livro10"
                  ></img>
                </div>
              </div>
              <div className="h-book hb11">
                <div className="divimg">
                  <img
                    src="./assets/mazeRunnerACuraMortal.jpg"
                    alt="Livro11"
                  ></img>
                </div>
              </div>
              <div className="h-book hb12">
                <div className="divimg">
                  <img src="./assets/umCasoPerdido.jpg" alt="Livro12"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Perfil;