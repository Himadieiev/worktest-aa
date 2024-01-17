import { Routes, Route, Navigate } from 'react-router-dom';
import { FC } from 'react';
import { Container } from 'react-bootstrap';

import AccountsPage from './pages/AccountsPage';
import ProfilesPage from './pages/ProfilesPage';
import CampaignsPage from './pages/CampaignsPage';
import Layout from './components/Layout';

const App: FC = () => {
  return (
    <Container className="pt-5">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AccountsPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
