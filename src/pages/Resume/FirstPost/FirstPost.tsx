import React from 'react';
import PostBlock from '@components/PostBlock';
import styles from './FirstPost.module.scss';
import commentIcon from '@assets/icons/comment.svg';
import eyeIcon from '@assets/icons/eye.svg';
import abstractImage from '@assets/images/abstract-art.jpg';

const FirstPost: React.FC = () => {
  return (
    <PostBlock>
      <div className={styles.image}>
        <img src={abstractImage} alt="Abstract art" />
      </div>

      <div className={styles.comment}>
        <div className={styles['comment-header']}>
          <img src={commentIcon} alt="Comment" />
          <a href="#">Jason Anderson</a>
          <span>commented:</span>
        </div>

        <div className={styles['comment-body']}>
          <p className={styles.text}>
            Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your
            heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion,
            memories, light breeze, the sun that appears on the skin and caresses the face.
          </p>
          <p className={styles.signature}>
            – Jason,<i> 10:30 am</i>
          </p>
        </div>
      </div>

      <div className={styles['comment-footer']}>
        <div className={styles.views}>
          <img src={eyeIcon} alt="Views" />
          <span>432</span>
        </div>
        <div className={styles.comments}>
          <img src={commentIcon} alt="Comments" />
          <span>47</span>
        </div>
      </div>
    </PostBlock>
  );
};

export default FirstPost;
