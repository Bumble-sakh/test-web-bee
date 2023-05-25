import React from 'react';
import styles from './PostBlock.module.scss';
import BlockHeader from '../BlockHeader';

interface PostBlockProps {
  title?: string;
  time?: string;
  children?: React.ReactNode;
}

const PostBlock: React.FC<PostBlockProps> = ({ title, time, children }) => {
  const isTitle = Boolean(title);
  const isChildren = Boolean(children);

  return (
    <section className={styles.block}>
      <BlockHeader collapse={isTitle} title={title} time={time} />

      {isChildren && <div className={styles.children}>{children}</div>}
    </section>
  );
};

export default PostBlock;
