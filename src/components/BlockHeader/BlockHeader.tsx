import React from 'react';
import styles from './BlockHeader.module.scss';

import collapseIcon from '@assets/icons/collapse.svg';
import updateIcon from '@assets/icons/update.svg';
import closeIcon from '@assets/icons/close.svg';
import timeIcon from '@assets/icons/time.svg';

export enum HeaderSize {
  l = 'l',
  s = 's',
}

interface BlockProps {
  collapse?: boolean;
  update?: boolean;
  close?: boolean;
  title?: string;
  time?: string;
  size?: HeaderSize;
}

const BlockHeader: React.FC<BlockProps> = ({
  collapse = false,
  update = false,
  close = false,
  title,
  time,
  size = HeaderSize.l,
}) => {
  const isSizeSmall = size === HeaderSize.s;
  const headerStyles = isSizeSmall ? `${styles.header} ${styles.small}` : `${styles.header}`;

  const isTitle = Boolean(title);
  const isTime = Boolean(time);
  const isControls = collapse || update || close;

  return (
    <div className={headerStyles}>
      {isTitle && <h3 className={styles.title}>{title}</h3>}

      {isTime && (
        <div className={styles.time}>
          <img src={timeIcon} alt="time" />
          <span>{time} ago</span>
        </div>
      )}

      {isControls && (
        <div className={styles.controls}>
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
  );
};

export default React.memo(BlockHeader);
