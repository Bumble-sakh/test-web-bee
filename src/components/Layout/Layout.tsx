import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
