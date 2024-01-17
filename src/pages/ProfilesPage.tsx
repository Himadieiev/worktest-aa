import { FC } from 'react';
import Table from 'react-bootstrap/Table';

import { profilesData } from '../data/profilesData';

const ProfilesPage: FC = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Country</th>
          <th>Marketplace</th>
        </tr>
      </thead>
      <tbody>
        {profilesData.map(profile => (
          <tr key={profile.profileId}>
            <td>{profile.profileId}</td>
            <td>{profile.country}</td>
            <td>{profile.marketplace}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProfilesPage;
