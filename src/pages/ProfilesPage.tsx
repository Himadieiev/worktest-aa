import { FC, useState } from 'react';
import Table from 'react-bootstrap/Table';

import { profilesData } from '../data/profilesData';
import { sortByColumn } from '../utils/sort';

const ProfilesPage: FC = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);

  const handleSort = (columnName: string) => {
    setSortedColumn(columnName);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = sortByColumn(profilesData, sortedColumn, sortOrder);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => handleSort('profileId')}>Id</th>
          <th onClick={() => handleSort('country')}>Country</th>
          <th onClick={() => handleSort('marketplace')}>Marketplace</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map(profile => (
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
