import React, { useState } from 'react';
import BasicBlock from '@components/BasicBlock';
import Loader from './Loader';
import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import { YMAP_API_KEY, LOCATION, POINT } from '@config/map';
import styles from './Map.module.scss';

const Map: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoadHandler = (): void => {
    setIsLoading(false);
  };

  return (
    <BasicBlock title="Map">
      <div className={styles.map}>
        <YMaps query={{ apikey: YMAP_API_KEY }}>
          {isLoading && <Loader />}
          <YMap defaultState={LOCATION} width={'100%'} height={480} onLoad={onLoadHandler}>
            <Placemark
              geometry={POINT.coordinates}
              properties={{ iconContent: POINT.title }}
              options={{ preset: POINT.icon }}
            />
          </YMap>
        </YMaps>
      </div>
    </BasicBlock>
  );
};

export default Map;
