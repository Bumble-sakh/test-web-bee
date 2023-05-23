import React from 'react';
import styles from './BlockHeader.module.scss';

import collapseIcon from '@assets/icons/collapse.svg';
import updateIcon from '@assets/icons/update.svg';
import closeIcon from '@assets/icons/close.svg';
import timeIcon from '@assets/icons/time.svg';

interface BlockProps {
  collapse?: boolean;
  update?: boolean;
  close?: boolean;
  title?: string;
  time?: string;
}

const BlockHeader: React.FC<BlockProps> = ({ collapse = false, update = false, close = false, title, time }) => {
  const isTitle = Boolean(title);
  const isTime = Boolean(time);
  const isControls = collapse || update || close;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        {isTitle && <h3 className={styles.title}>{title}</h3>}

        {isTime && (
          <div>
            <img src={timeIcon} alt="time" />
            <span>{time} ago</span>
          </div>
        )}

        {isControls && (
          <div className="controls">
            {collapse && (
              <button className={styles.collapse}>
                <img src={collapseIcon} alt="collapse" />
              </button>
            )}
            {update && (
              <button className={styles.update}>
                <img src={updateIcon} alt="update" />
              </button>
            )}
            {close && (
              <button className={styles.close}>
                <img src={closeIcon} alt="close" />
              </button>
            )}
          </div>
        )}
      </div>
      <span className={styles.timer}></span>
    </section>
  );
};

export default BlockHeader;
