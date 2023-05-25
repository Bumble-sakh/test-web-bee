import React from 'react';
import styles from './SideBlock.module.scss';
import BlockHeader from '../BlockHeader';
import { HeaderSize } from '@components/BlockHeader/BlockHeader';

interface SideBlockProps {
  title: string;
  children?: React.ReactNode;
}

const SideBlock: React.FC<SideBlockProps> = ({ title, children }) => {
  return (
    <section className={styles.block}>
      <BlockHeader collapse title={title} size={HeaderSize.s} />
      {children}
    </section>
  );
};

export default SideBlock;
