import React from 'react';
import PostBlock from '@components/PostBlock';
import styles from './ResumeBlock.module.scss';
import myPhoto from '@assets/images/myPhoto.jpg';
import phoneIcon from '@assets/icons/phone.svg';
import telegramIcon from '@assets/icons/telegram.svg';
import githubIcon from '@assets/icons/github.svg';

const ResumeBlock: React.FC = () => {
  return (
    <PostBlock title="Resume" time="1 minute">
      <div className={styles.header}>
        <div className={styles.contacts}>
          <p className={styles.name}>Асессоров Игорь</p>
          <p className={styles.title}>Контакты: </p>
          <ul>
            <li className={styles.contact}>
              <a href="tel:79242812565" target="_blank" rel="noreferrer">
                <img src={phoneIcon} alt="" /> +7 (924) 281-25-65 (GMT +11)
              </a>
            </li>
            <li className={styles.contact}>
              <a href="https://t.me/Bumble_sakh" target="_blank" rel="noreferrer">
                <img src={telegramIcon} alt="" /> https://t.me/Bumble_sakh
              </a>
            </li>
            <li className={styles.contact}>
              <a href="https://github.com/Bumble-sakh" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="" /> https://github.com/Bumble-sakh
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.photo}>
          <img src={myPhoto} alt="Photo" />
        </div>
      </div>

      <div className={styles.about}>
        <p className={styles.text}>
          До 2022 года я приобретал больше опыт работы в продажах, коммерческой недвижимости и маркетинге. Однако сейчас
          я хочу полностью сменить свою сферу деятельности и заниматься разработкой.
        </p>
        <p className={styles.text}>
          За достаточно короткий промежуток времени я приобрел много знаний, навыков и опыта в области Front-end
          разработки. Сейчас углубляюсь в сторону изучения технологий и расширяю свою экспертность.
        </p>
        <p className={styles.text}>
          Не боюсь браться за совершенно новые проекты и погружаться в них с головой. Могу быстро с нуля разобраться в
          совершенно незнакомых мне вопросах и найти нестандартное технологическое решение.
        </p>
        <p className={styles.text}>
          Я достаточно осознанно подошел к смене карьерного направления, поэтому готов прикладывать максимум усилий в
          работе. Сейчас ищу место работы для более прикладного применения своих навыков в области разработки.
        </p>
        <p className={styles.text}>
          Работал в команде над созданием
          <a href="https://rslang-bumble-sakh.netlify.app/#/" target="_blank" rel="noreferrer">
            {' '}
            приложения для изучения английских слов
          </a>
        </p>
        <p className={styles.text}>
          Работал в команде над созданием
          <a href="https://gleeful-arithmetic-daffb3.netlify.app/#/" target="_blank" rel="noreferrer">
            {' '}
            приложения канбан-доски
          </a>
        </p>
      </div>
      <div className={styles.skills}>
        <p>Стек технологий:</p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>RTK</li>
          <li>RTK Query</li>
          <li>Java Script</li>
          <li>Type Script</li>
          <li>Material UI</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </PostBlock>
  );
};

export default ResumeBlock;
