import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="header center">
        <picture className="image">
          <img src="./assets/logo2.png"></img>
        </picture>

        <nav>
          <ul>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </nav>

        <picture className="perfil">
          <img src="./assets/perfil4.png"></img>
        </picture>
      </div>
    </header>
  );
};

export default Header;
