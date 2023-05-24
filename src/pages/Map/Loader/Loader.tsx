import React from 'react';
import loaderIcon from '@assets/icons/loader.svg';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img src={loaderIcon} alt="Loader" className={styles.rotating} />
    </div>
  );
};

export default Loader;
