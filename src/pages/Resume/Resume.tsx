import React from 'react';
import PostBlock from '@components/PostBlock';
import styles from './Resume.module.scss';
import FirstPost from './FirstPost';
import UserBlock from '@components/UserBlock';
import Navigation from './Navigation';
import Thoughts from './Thoughts';

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
        <FirstPost />
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
