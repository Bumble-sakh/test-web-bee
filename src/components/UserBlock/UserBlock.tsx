import React from 'react';
import styles from './UserBlock.module.scss';
import defaultPhoto from '@assets/images/defaultPhoto.jpg';
import tgIcon from '@assets/icons/telegram.svg';
import hhIcon from '@assets/icons/hh.svg';
import twitterIcon from '@assets/icons/twitter.svg';

interface UserBlockProps {
  photo?: string;
  name: string;
  profession: string;
  tgLink?: string;
  hhLink?: string;
  twitterLink?: string;
}

const UserBlock: React.FC<UserBlockProps> = ({ photo, name, profession, tgLink, hhLink, twitterLink }) => {
  const isPhoto = Boolean(photo);
  const isTg = Boolean(tgLink);
  const isHh = Boolean(hhLink);
  const isTwitter = Boolean(twitterLink);
  const isSocials = isTg || isHh || isTwitter;

  return (
    <section className={styles.block}>
      <img src={isPhoto ? photo : defaultPhoto} alt="Photo" className={styles.photo} />

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.profession}>{profession}</p>
      </div>

      {isSocials && (
        <div className={styles.socials}>
          {isTg && (
            <a href={tgLink}>
              <img src={tgIcon} alt="TG" />
            </a>
          )}
          {isHh && (
            <a href={hhLink}>
              <img src={hhIcon} alt="HH" />
            </a>
          )}
          {isTwitter && (
            <a href={twitterLink}>
              <img src={twitterIcon} alt="Twitter" />
            </a>
          )}
        </div>
      )}
    </section>
  );
};

export default UserBlock;
