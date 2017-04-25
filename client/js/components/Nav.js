import React from 'react';

const Nav = () => {
  return (
    <header>
      <nav className="Nav">
        <ul>
          <li className="Nav-Logo">
            <a href="/" tabIndex="1">
              <img
                height="50px"
                width="50px"
                src="/underground-riches-logo.svg"
                alt="underground-riches-logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;