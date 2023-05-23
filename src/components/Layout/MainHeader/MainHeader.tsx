import React from 'react';
import back from '@assets/icons/back.svg';
import statistics from '@assets/icons/statistics.svg';
import invoices from '@assets/icons/invoices.svg';
import schedule from '@assets/icons/schedule.svg';
import { Link } from 'react-router-dom';
import styles from './MainHeader.module.scss';

const MainHeader: React.FC = () => {
  const onClickHandle = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
  };

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Link to="" className={styles.back} onClick={onClickHandle}>
          <img src={back} alt="back" />
        </Link>
        <span>
          <b>User pages</b> - Profile
        </span>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="" className={styles.link} onClick={onClickHandle}>
              <img src={statistics} alt="icon" />
              <span>Statistics</span>
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link} onClick={onClickHandle}>
              <img src={invoices} alt="icon" />
              <span>Invoices</span>
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link} onClick={onClickHandle}>
              <img src={schedule} alt="icon" />
              <span>Schedule</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
