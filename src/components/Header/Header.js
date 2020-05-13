import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import HeaderMenu from 'components/Header/Menu';
import * as routes from 'utils/routes';

import './Header.scss';

const Header = ({ isMenuToggle, onMenuToggle }) => {
  let isAdmin = window.location.href.includes('/admin');

  return (
    <header className={`header ${isAdmin ? 'is-admin' : ''}`}>
      <Link to={routes.INDEX}>
        <span>Logo</span>
      </Link>
      <HeaderMenu isToggle={isMenuToggle} onToggle={onMenuToggle} />
    </header>
  );
}

export default withRouter(Header);
