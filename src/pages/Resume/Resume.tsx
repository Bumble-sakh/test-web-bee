import React from 'react';
import PostBlock from '@components/PostBlock';
import styles from './Resume.module.scss';
import UserBlock from '@components/UserBlock/UserBlock';
import Navigation from './Navigation';
import Thoughts from './Thoughts';
import ResumeBlock from './ResumeBlock';

const Resume: React.FC = () => {
  const user = {
    photo: '',
    name: 'Hanna Dorman',
    profession: 'UX/UI designer',
    tgLink: '#',
    hhLink: '#',
    twitterLink: '#',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.posts}>
        <ResumeBlock />
        <PostBlock title="Sunset Sunset Sunset" time="53 minutes" />
        <PostBlock title="Morning of Siberia" time="56 minutes" />
      </div>
      <aside className={styles.sidebar}>
        <UserBlock {...user} />
        <Navigation />
        <Thoughts />
      </aside>
    </div>
  );
};

export default Resume;
