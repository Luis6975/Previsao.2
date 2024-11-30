import './Header.css';

function Header() {
  return (
    <header className="menu" aria-label="Cabeçalho de navegação do site OPEN Clima">
      <div className="logo">
        <span>OPEN Clima - Meteorologia</span>
      </div>
      <nav>
        <a href="/" aria-label="Página inicial">Home</a>
        <a href="/Noticias" aria-label="Notícias">Notícias</a>
        <a href="/mapa" aria-label="Mapeamento">Mapa</a>
        <a href="/contatos" aria-label="Página de contatos">Contato</a>
      </nav>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          aria-label="Barra de pesquisa" 
        />
        <button aria-label="Botão de pesquisa">🔍</button>
      </div>
    </header>
  );
}

export default Header;
