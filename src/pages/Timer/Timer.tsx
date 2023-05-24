import BasicBlock from '@components/BasicBlock';
import React, { useContext, useEffect, useState } from 'react';
import getTime from '@utils/getTime';
import { TimerContext } from '@src/App';
import styles from './Timer.module.scss';

const Timer: React.FC = () => {
  const startTime = useContext(TimerContext);
  const currentTime = Date.now();
  const diffTime = (currentTime - startTime) / 1000;

  const [seconds, setSeconds] = useState(diffTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <BasicBlock title="Timer">
      <div className={styles.timer}>{getTime(seconds)}</div>
    </BasicBlock>
  );
};

export default React.memo(Timer);
