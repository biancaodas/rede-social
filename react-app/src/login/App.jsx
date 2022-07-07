import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <React.Fragment>
    <div className="container">
        <div className="content create-content"> {/*Criar conta*/}
            <div className="column first-column"> {/*inicio 1 coluna*/}
                <h2 className="title title-primary">Social Pets</h2>
                <p className="description description-primary">Para manter-se conectado</p>
                <p className="description description-primary">Faça o login com suas informações</p>
                <button id="signIn" className="btn btn-primary">Entrar</button>
            </div> {/*fim 1 coluna*/}
            <div className="column second-column"> {/*inicio 2 coluna*/}
                <h2 className="title title-second">Crie sua conta</h2>
                <div className="social-media"> {/*inicio social mídia*/}
                    <ul className="list-social-media">
                        <a className="link-social-media" href="/#" aria-label="Link para logar com o Facebook"> {/*utilizei o aria-label para regular o link*/}
                            <li className="item-social-media">
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="fa-brands"/>
                            </li>
                        </a>
                        <a className="link-social-media" href="/#" aria-label="Link para logar com o Instagram"> {/*utilizei o aria-label para regular o link*/}
                            <li className="item-social-media">
                                <FontAwesomeIcon icon="fa-brands fa-instagram" className="fa-brands"/>
                            </li>
                        </a>
                        <a className="link-social-media" href="/#" aria-label="Link para logar com o GMail"> {/*utilizei o aria-label para regular o link*/}
                            <li className="item-social-media">
                                <FontAwesomeIcon icon="fa-brands fa-google" className="fa-brands"/>
                            </li>
                        </a>
                    </ul>
                </div> {/*fim social mídia*/}
                <form className="form"> {/*input de info*/}
                    <label className="label-input">
                        <i className="fa-solid fa-user icon-modify"></i>
                        <input type="text" placeholder="Nome"/>
                    </label>

                    <label className="label-input">
                        <i className="fa-solid fa-envelope icon-modify"></i>
                        <input type="email" placeholder="E-mail"/>
                    </label>

                    <label className="label-input">
                        <i className="fa-solid fa-lock icon-modify"></i>
                        <input type="password" placeholder="Senha"/>
                    </label>

                    <button className="btn btn-second">Cadastrar</button>
                </form> {/*fim input de info*/}
            </div> {/*fim 2 coluna*/}
        </div> {/*FIM CRIAR CONTA*/}
        <div className="content login-content"> {/*Fazer login*/}
              <div className="first-column"> {/*inicio 1 coluna*/}
                  <h2 className="title title-primary">Social Pets</h2>
                  <p className="description description-primary">Insira seus dados aqui</p>
                  <p className="description description-primary">Inicie sua jornada conosco</p>
                  <button id="signup" className="btn btn-primary">Inscreva-se</button>
              </div> {/*fim 1 coluna*/}
              <div className="second-column"> {/*inicio 2 coluna*/}
                  <h2 className="title title-second">Olá Pet Lover</h2>
                  <div className="social-media"> {/*inicio social mídia*/}
                      <ul className="list-social-media">
                          <a className="link-social-media" href="/#" aria-label="Link para logar com o Facebook"> {/*utilizei o aria-label para regular o link*/}
                              <li className="item-social-media">
                                  <FontAwesomeIcon icon="fa-brands fa-facebook-f"/>
                              </li>
                          </a>
                          <a className="link-social-media" href="/#" aria-label="Link para logar com o instagram"> {/*utilizei o aria-label para regular o link*/}
                              <li className="item-social-media">
                                  <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                              </li>
                          </a>
                          <a className="link-social-media" href="/#" aria-label="Link para logar com o GMail"> {/*utilizei o aria-label para regular o link*/}
                              <li className="item-social-media">
                                  <FontAwesomeIcon icon="fa-brands fa-google"/>
                              </li>
                          </a>
                      </ul>
                  </div> {/*fim social mídia*/}
                  <p className="description description-second"> ou use o seu e-mail para login</p> 
                  <form className="form"> {/*input de info*/}
  
                      <label className="label-input">
                          <i className="fa-solid fa-envelope icon-modify"></i>
                          <input type="email" placeholder="E-mail"/>
                      </label>
                      <label className="label-input">
                          <i className="fa-solid fa-lock icon-modify"></i>
                          <input type="password" placeholder="Senha"/>
                      </label>
                      <a className="forgot-password" href="/#">Esqueceu a senha?</a>
                      <button className="btn btn-second">Entrar</button>
                  </form> {/*fim input de info*/}
                    </div> {/*fim 2 coluna*/}
                </div> {/*FIM FAZER LOGIN*/}
            </div> {/*fim container*/}
    </React.Fragment>
  );
}

export default App;
