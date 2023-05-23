import React from 'react';
import ROUTES from '@config/routes';
import activity from '@assets/icons/activity.svg';
import map from '@assets/icons/map.svg';
import time from '@assets/icons/time.svg';
import notes from '@assets/icons/notes.svg';
import friends from '@assets/icons/friends.svg';
import photos from '@assets/icons/photos.svg';
import settings from '@assets/icons/settings.svg';
import down from '@assets/icons/down.svg';

import { NavLink, Link } from 'react-router-dom';
import styles from './SectionHeader.module.scss';

const SectionHeader: React.FC = () => {
  const onClickHandle = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
  };

  return (
    <div className={styles.header}>
      <nav>
        <ul className={styles.pages}>
          <li>
            <NavLink
              to={ROUTES.resume}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <img src={activity} alt="icon" />
              <span>Activity</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.map}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <img src={map} alt="icon" />
              <span>Map</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.timer}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <img src={time} alt="icon" />
              <span>Time</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="" className={styles.link} onClick={onClickHandle}>
              <img src={notes} alt="icon" />
              <span>Notes</span>
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link} onClick={onClickHandle}>
              <img src={friends} alt="icon" />
              <span>Friends</span>
            </Link>
          </li>
          <li>
            <Link to="" className={styles.link} onClick={onClickHandle}>
              <img src={photos} alt="icon" />
              <span>Photos</span>
            </Link>
          </li>
          <li>
            <button className={styles.settings} onClick={onClickHandle}>
              <img src={settings} alt="icon" />
              <img src={down} alt="icon" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SectionHeader;
