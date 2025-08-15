import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ searchTerm, setSearchTerm }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef();
  const location = useLocation();

  const isNotebookPage = location.pathname.startsWith("/notebook")

  const suggestions = ["Dell", "Lenovo", "Samsung", "Acer"];

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    inputRef.current.blur(); // opcional: fecha o dropdown
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/texto_logo.png"}
              alt="Logo COAP"
            />
          </Link>
        </div>
        {!isNotebookPage && (
        <div
          className="search-bar"
          onBlur={() => setShowSuggestions(false)}
          onFocus={() => setShowSuggestions(true)}
        >
          
          <div className="search-input-wrapper">
            <input
              type="text"
              ref={inputRef}
              placeholder="Pesquisar notebooks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={() => setShowSuggestions(true)}
              
            />
            {searchTerm && (
              <button
                className="clear-btn"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setSearchTerm("");
                  setShowSuggestions(false);
                }}
              >
                ×
              </button>
            )}
          </div>

          {showSuggestions && (
            <ul className="suggestion-dropdown">
              <li className="suggestion-header">Sugestões de modelo/marca</li>
              {suggestions.map((sug, idx) => (
                <li key={idx} onMouseDown={() => handleSuggestionClick(sug)}>
                  {sug}
                </li>
              ))}
            </ul>
          )}
        </div>
        )}

        <nav className="nav-links">
          <Link to="/">Início</Link>
          <a href="/#/contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
