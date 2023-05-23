import React from 'react';
import styles from './BasicBlock.module.scss';
import BlockHeader from '../BlockHeader';

interface BasicBlockProps {
  title: string;
  children: React.ReactNode;
}

const BasicBlock: React.FC<BasicBlockProps> = ({ title, children }) => {
  return (
    <section className={styles.block}>
      <BlockHeader collapse update close title={title} />
      {children}
    </section>
  );
};

export default BasicBlock;
