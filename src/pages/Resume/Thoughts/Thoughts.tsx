import React from 'react';
import SideBlock from '@components/SideBlock';
import styles from './Thoughts.module.scss';

const Thoughts: React.FC = () => {
  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <SideBlock title="Share your thoughts">
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <textarea placeholder="Enter your message..." className={styles.textarea}></textarea>
        <button type="submit" className={styles.save}>
          Save
        </button>
      </form>
    </SideBlock>
  );
};

export default Thoughts;
