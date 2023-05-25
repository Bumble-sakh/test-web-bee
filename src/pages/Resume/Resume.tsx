import React from 'react';
import PostBlock from '@components/PostBlock';
import styles from './Resume.module.scss';
import UserBlock from '@components/UserBlock/UserBlock';
import SideBlock from '@components/SideBlock/SideBlock';

import profileIcon from '@assets/icons/profile.svg';
import balanceIcon from '@assets/icons/balance.svg';
import connectionsIcon from '@assets/icons/connections.svg';
import friendsIcon from '@assets/icons/friends.svg';
import eventsIcon from '@assets/icons/events.svg';
import settingsIcon from '@assets/icons/settings.svg';

const Resume: React.FC = () => {
  const user = {
    photo: '',
    name: 'Hanna Dorman',
    profession: 'UX/UI designer',
    tgLink: '#',
    hhLink: '#',
    twitterLink: '#',
  };

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.posts}>
        <PostBlock>Post1</PostBlock>
        <PostBlock title="Sunset Sunset Sunset" time="53 minutes" />
        <PostBlock title="Morning of Siberia" time="56 minutes" />
      </div>
      <aside className={styles.sidebar}>
        <UserBlock {...user} />

        <SideBlock title="Navigation">
          <ul className={styles.list}>
            <li>
              <div className={styles.item}>
                <img src={profileIcon} alt="icon" className={styles.icon}></img>
                <div className={styles.title}>My profile</div>
              </div>
              <div className={styles.info}></div>
            </li>
            <li>
              <div className={styles.item}>
                <img src={balanceIcon} alt="icon" className={styles.icon}></img>
                <div className={styles.title}>Balance</div>
              </div>
              <div className={styles.money}>$ 1,430</div>
            </li>
            <li>
              <div className={styles.item}>
                <img src={connectionsIcon} alt="icon" className={styles.icon}></img>
                <div className={styles.title}>Connections</div>
              </div>
              <div className={`${styles.badge} ${styles.red}`}>29</div>
            </li>
            <li>
              <div className={styles.item}>
                <img src={friendsIcon} alt="icon" className={styles.icon}></img>
                <div className={styles.title}>Friends</div>
              </div>
              <div className={styles.info}></div>
            </li>
          </ul>

          <hr className={styles.hr} />

          <ul className={styles.list}>
            <li>
              <div className={styles.item}>
                <img src={eventsIcon} alt="icon" className={styles.icon}></img>
                <div className={styles.title}>Events</div>
              </div>
              <div className={styles.badge}>45</div>
            </li>
            <li>
              <div className={styles.item}>
                <img src={settingsIcon} alt="icon" className={styles.icon}></img>
                <div className={styles.title}>Account settings</div>
              </div>
              <div className={styles.info}></div>
            </li>
          </ul>
        </SideBlock>

        <SideBlock title="Share your thoughts">
          <form className={styles.form} onSubmit={onSubmitHandler}>
            <textarea placeholder="Enter your message..." className={styles.textarea}></textarea>
            <button type="submit" className={styles.save}>
              Save
            </button>
          </form>
        </SideBlock>
      </aside>
    </div>
  );
};

export default Resume;
