import React from 'react';
import Layout from '@components/Layout';
import Map from '@pages/Map';
import Resume from '@pages/Resume';
import Timer from '@pages/Timer';
import ROUTES from '@config/routes';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.index} element={<Layout />}>
          <Route path={ROUTES.resume} element={<Resume />} />
          <Route path={ROUTES.map} element={<Map />} />
          <Route path={ROUTES.timer} element={<Timer />} />
          <Route path={ROUTES.all} element={<Navigate to={ROUTES.index} replace />} />
          <Route index element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
