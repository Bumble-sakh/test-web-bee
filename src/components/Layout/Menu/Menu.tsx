import ROUTES from '@config/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.resume}>Resume</Link>
        </li>
        <li>
          <Link to={ROUTES.map}>Map</Link>
        </li>
        <li>
          <Link to={ROUTES.timer}>Timer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
