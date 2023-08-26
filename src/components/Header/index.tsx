import "./style.css";

//declaração do que será feito na função neste caso function Header.
function Header(){

    return (

    <>
  <div id="sombra" />
  <header>
    <div className="container header_conteudo">
      {/* <a class="menu_barras" href="#"><img onclick="mostrarMenu()" src="../Imagens/Menu de barras.svg" alt=""></a> */}
      {/* Acessibilidade ARIA
      aria-label = para indicar o que o elemento faz.
      aria-expanded = atributo que salva o status do botão (expandido ou nao - true ou false).
      aria-control = especifica qual elemento esta sendo controlado atraves do Id.
      aria-haspopup = indica que o elemento tem um popup (true ou false).
      */}
      <a
        className="menu_barras"
        id="menu_barras"
        aria-label="abrir menu"
        aria-expanded="false"
        aria-controls="menu_links"
        aria-haspopup="true"
        onClick={mostrarMenu}
        href="#"
      >
        <div className="barras" />
      </a>
      <img className="header_logo" src="../img/logo.svg" alt="" />
      <nav>
        <div id="menu_links" className="menu_links">
          <a href="../Home/index.html">home</a>
          <a href="#">serviços</a>
          <a href="../CadastroDev/index.html">cadastro</a>
        </div>
        <a className="header_icone_login" href="../Login/index.html">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
          </svg>
        </a>
        <a className="header_botao_login" href="../Login/index.html">
          login
        </a>
      </nav>
    </div>
  </header>
</>
    )
}

//querido usa esse Header ai como informação padrão.
export default Header;